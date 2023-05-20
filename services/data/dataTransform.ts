import storage from './storage'

class DataTransform {
  public fromTextToASCIIArray(textToConvert: string) {
    return textToConvert
      .split('')
      .map((_character, index) => textToConvert.charCodeAt(index))
  }

  public fromASCIIToText(stringToCreate: string, targetArrayASCII: number[]) {
    stringToCreate = targetArrayASCII
      .map((itemASCII) => {
        const numbersCharCode = Array.from(String(itemASCII), Number)
        return numbersCharCode
          .map((subItemASCII, index) => {
            if (index % 2 === 0) return subItemASCII + 65 + index * 3
            return String.fromCharCode(subItemASCII + 65 + index * 3)
          })
          .join('')
      })
      .join('')

    return stringToCreate
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
          multiplier = index * index * 60
        }

        // default (equal length)
        const resultOperation = itemASCII * multiplier
        this.fillPositionArray(resultOperation, index)
        return resultOperation
      }
    )
  }
}

const dataTransform = new DataTransform()
export default dataTransform
