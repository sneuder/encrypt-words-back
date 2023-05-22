import storage from './storage'

class DataTransform {
  public fromTextToASCIIArray(textToConvert: string): number[] {
    return textToConvert.split('').map((character) => character.charCodeAt(0))
  }

  public fromASCIIArrayToText(arrayToConvert: number[]) {
    return arrayToConvert
      .map((itemToConvert) => {
        return String.fromCharCode(itemToConvert)
      })
      .join('')
  }

  public fromASCIIToText(
    stringToCreate: string,
    targetArrayASCII: (string | number)[]
  ) {
    let interval = 0

    stringToCreate = targetArrayASCII
      .map((itemASCII) => {
        const numbersCharCode = Array.from(String(itemASCII), Number)
        return numbersCharCode
          .map((subItemASCII) => {
            interval++
            if (interval % 2 === 0) return subItemASCII

            subItemASCII = this.rangeASCII(subItemASCII)
            return String.fromCharCode(subItemASCII)
          })
          .join('')
      })
      .join('')

    return stringToCreate.toLowerCase()
  }

  // a text composed with letters and numbers to only ascii
  public fromTextToASCII(targetArrayASCII: string[]) {
    let interval = 0

    return targetArrayASCII.map((itemASCII) => {
      return Number(
        itemASCII
          .split('')
          .map((subItemASCII) => {
            interval++
            if (interval % 2 === 0) return Number(subItemASCII)

            const numberASCII = Number(subItemASCII.toUpperCase().charCodeAt(0))
            return this.reverseRangeASCII(numberASCII)
          })
          .join('')
      )
    })
  }

  public fillPositionArray(resultOperation: number, _index: number) {
    storage.arrayASCIIPositions.push(resultOperation.toString().length)
  }

  public multiWordsWithKW() {
    storage.arrayASCIIPositions = []

    storage.arrayASCIIWords = storage.arrayASCIIWords.map((subASCII, index) => {
      const itemASCII = subASCII as number
      let multiplier = storage.arrayASCIIKeyWords[index] as number
      // words > keywords
      if (storage.arrayASCIIKeyWords[index] === undefined) {
        multiplier = index * 65
      }
      // keywords > words
      if (index === storage.arrayASCIIWords.length - 1) {
        multiplier = (index + 1) * (index + 1) * 60
      }

      // default (equal length)
      const resultOperation = itemASCII * multiplier
      this.fillPositionArray(resultOperation, index)
      return resultOperation
    })
  }

  public divideWordsWithKW(
    arrayASCIIWords: number[],
    arrayASCIIKeyWord: number[]
  ) {
    arrayASCIIWords = arrayASCIIWords.map((itemASCII, index) => {
      let divider = arrayASCIIKeyWord[index]
      // words > keywords
      if (arrayASCIIKeyWord[index] === undefined) {
        divider = index * 65
      }
      // keywords > words
      if (index === arrayASCIIWords.length - 1) {
        divider = (index + 1) * (index + 1) * 60
      }

      // default (equal length)
      const resultOperation = itemASCII / divider
      return resultOperation
    })

    return arrayASCIIWords
  }

  private rangeASCII(numberASCII: number) {
    const initialRange = 65 // 'A'
    const finalRange = 90 // 'Z'
    return (numberASCII % (finalRange - initialRange + 1)) + initialRange
  }

  private reverseRangeASCII(number: number) {
    const initialRange = 65 // 'A'
    const finalRange = 90 // 'Z'

    let result = number - initialRange
    if (result < 0) {
      result =
        finalRange -
        initialRange +
        1 +
        (result % (finalRange - initialRange + 1))
    }
    return result
  }
}

const dataTransform = new DataTransform()
export default dataTransform
