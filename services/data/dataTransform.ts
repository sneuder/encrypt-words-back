import storage from './storage'

class DataTransform {
  public fromTextToASCIIArray(textToConvert: string) {
    return textToConvert
      .split('')
      .map((_character, index) => textToConvert.charCodeAt(index))
  }

  public fromASCIIToText(stringToCreate: string, targetArrayASCII: number[]) {
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

    return stringToCreate.toLocaleLowerCase()
  }

  public fromTextToASCII(targetArrayASCII: number[]) {
    return targetArrayASCII.map((itemArrayASCII, index) => {
      if ((index + 1) % 2 === 0) return itemArrayASCII
      return itemArrayASCII.toString().charCodeAt(0)
    })
  }

  public fillPositionArray(resultOperation: number, index: number) {
    storage.arrayASCIIPositions.push(
      (resultOperation.toString().length - 1) * (index + 21)
    )
  }

  public multiWordsWithKW() {
    storage.arrayASCIIPositions = []

    storage.arrayASCIIWords = storage.arrayASCIIWords.map(
      (itemASCII, index) => {
        let multiplier = storage.arrayASCIIKeyWord[index]
        // words > keywords
        if (storage.arrayASCIIKeyWord[index] === undefined) {
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
      }
    )
  }

  public divideWordsWithKW() {}

  private rangeASCII(numberASCII: number) {
    const initialRange = 65 // 'A'
    const finalRange = 90 // 'Z'
    return (numberASCII % (finalRange - initialRange + 1)) + initialRange
  }
}

const dataTransform = new DataTransform()
export default dataTransform
