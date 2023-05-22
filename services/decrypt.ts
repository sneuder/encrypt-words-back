import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'

class Decrypt {
  public process(textEncrypted: string, textKeywords: string) {
    // to all chars ASCII
    let [wordsASCII, _keywordsASCII, positionASCII] =
      this.separateComponets(textEncrypted)

    let arrayASCIIPositions = dataTransform.fromTextToASCII(
      positionASCII.split('')
    )
    let numbersKeywordsASCII = this.getKeywordsArray(textKeywords)
    let arrayASCIIWords = this.getWordsArrayASCII(
      wordsASCII,
      arrayASCIIPositions
    )

    let mumbersWordsASCII = dataTransform.fromTextToASCII(arrayASCIIWords)
    mumbersWordsASCII = dataTransform.divideWordsWithKW(
      mumbersWordsASCII,
      numbersKeywordsASCII
    )

    console.log(mumbersWordsASCII)

    return 'Esneider'
  }

  public separateComponets(encryptedWord: string) {
    const textASCIISeparated = encryptedWord.split('.')
    return textASCIISeparated
  }

  private getKeywordsArray(keyWordsToValidate: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderArrayOfASCII(arrayASCII)
    arrayASCII = arrayManipulation.splitArrayOfASCII(arrayASCII)

    return arrayASCII
  }

  public getKeywords(keyWordsToValidate: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderArrayOfASCII(arrayASCII)
    arrayASCII = arrayManipulation.splitArrayOfASCII(arrayASCII)

    let textASCII = dataTransform.fromASCIIToText('', arrayASCII)
    return textASCII
  }

  private getWordsArrayASCII(wordsASCII: string, positionsASCII: number[]) {
    return positionsASCII.map((position) => {
      const partialWordsASCII = wordsASCII.slice(0, position)
      wordsASCII = wordsASCII.slice(position, wordsASCII.length)
      return partialWordsASCII
    })
  }
}

const decrypt = new Decrypt()
export default decrypt
