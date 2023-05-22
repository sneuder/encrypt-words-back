import storage from './data/storage'
import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'

class Decrypt {
  public process(textEncrypted: string, textKeywords: string) {
    const [wordsEncrypted, keywordsEncrypted, positionsEncrypted] =
      this.separateComponets(textEncrypted)

    this.saveEncryptedInfo(
      wordsEncrypted,
      keywordsEncrypted,
      positionsEncrypted
    )

    //

    storage.arrayASCIIPositions = dataTransform.fromTextToASCII(
      storage.stringASCIIPositions.split('')
    )

    storage.arrayTextWords = this.getWordsArrayText(
      storage.stringASCIIWords,
      storage.arrayASCIIPositions
    )

    // array process
    storage.arrayASCIIWords = dataTransform.fromTextToASCII(
      storage.stringASCIIWords.split('')
    )

    storage.arrayASCIIKeyWords = this.getKeywordsArrayASCII(textKeywords)

    //

    storage.arrayTextWords = this.getWordsArrayText(
      storage.stringASCIIWords,
      storage.arrayASCIIPositions
    )

    storage.arrayASCIIWords = dataTransform.fromTextToASCII(
      storage.arrayTextWords
    )

    storage.arrayASCIIWords = dataTransform.divideWordsWithKW(
      storage.arrayASCIIWords,
      storage.arrayASCIIKeyWords
    )

    storage.stringASCIIWords = dataTransform.fromASCIIArrayToText(
      storage.arrayASCIIWords
    )

    return storage.stringASCIIWords
  }

  private saveEncryptedInfo(
    wordsEncrypted: string,
    keywordsEncrypted: string,
    positionsEncrypted: string
  ) {
    storage.stringASCIIWords = wordsEncrypted
    storage.stringASCIIKeyWords = keywordsEncrypted
    storage.stringASCIIPositions = positionsEncrypted
  }

  public separateComponets(encryptedWord: string) {
    return encryptedWord.split('.')
  }

  private getKeywordsArrayASCII(keyWordsToValidate: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderASCIIArray(arrayASCII) as number[]
    arrayASCII = arrayManipulation.splitASCIIArray(arrayASCII) as number[]

    return arrayASCII
  }

  public getKeywords(keyWordsToValidate: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderASCIIArray(arrayASCII) as number[]
    arrayASCII = arrayManipulation.splitASCIIArray(arrayASCII) as number[]

    let textASCII = dataTransform.fromASCIIToText('', arrayASCII)
    return textASCII
  }

  private getWordsArrayText(wordsASCII: string, positionsASCII: number[]) {
    return positionsASCII.map((position) => {
      const partialWordsASCII = wordsASCII.slice(0, position)
      wordsASCII = wordsASCII.slice(position, wordsASCII.length)
      return partialWordsASCII
    })
  }
}

const decrypt = new Decrypt()
export default decrypt
