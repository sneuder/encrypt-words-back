import storage from './data/storage'
import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'
import msg from './msg'

class Decrypt {
  public process(textEncrypted: string, textKeywords: string) {
    const [wordsEncrypted, keywordsEncrypted, positionsEncrypted] =
      this.separateEncryptText(textEncrypted)

    this.saveEncryptedInfo(
      wordsEncrypted,
      keywordsEncrypted,
      positionsEncrypted
    )

    storage.arrayASCIIPositions = dataTransform.fromTextToASCII(
      storage.stringASCIIPositions.split('')
    )

    storage.arrayTextWords = this.getTextWords(
      storage.stringASCIIWords,
      storage.arrayASCIIPositions
    )

    storage.arrayASCIIWords = dataTransform.fromTextToASCII(
      storage.stringASCIIWords.split('')
    )

    storage.arrayASCIIKeyWords = this.getASCIIKeywords(textKeywords)

    storage.arrayTextWords = this.getTextWords(
      storage.stringASCIIWords,
      storage.arrayASCIIPositions
    )

    this.transformASCIIWord()
    return msg.object('decrypt', storage.stringASCIIWords)
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

  private transformASCIIWord() {
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
  }

  public separateEncryptText(encryptedWord: string) {
    return encryptedWord.split('.')
  }

  private getASCIIKeywords(keyWordsToValidate: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderASCIIArray(arrayASCII) as number[]
    arrayASCII = arrayManipulation.splitASCIIArray(arrayASCII) as number[]

    return arrayASCII
  }

  public getTextKeywords(keyWordsToValidate: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderASCIIArray(arrayASCII) as number[]
    arrayASCII = arrayManipulation.splitASCIIArray(arrayASCII) as number[]

    let textASCII = dataTransform.fromASCIIToText('', arrayASCII)
    return textASCII
  }

  private getTextWords(wordsASCII: string, positionsASCII: number[]) {
    return positionsASCII.map((position) => {
      const partialWordsASCII = wordsASCII.slice(0, position)
      wordsASCII = wordsASCII.slice(position, wordsASCII.length)
      return partialWordsASCII
    })
  }
}

const decrypt = new Decrypt()
export default decrypt
