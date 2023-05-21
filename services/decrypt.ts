import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'

class Decrypt {
  public process(textEncrypted: string, keywords: string) {
    // to all chars ASCII
    const arrayASCIIKeyWords = dataTransform.fromTextToASCIIArray(keywords)
    arrayASCIIKeyWords
    const arrayASCIIWords = dataTransform.fromTextToASCIIArray(textEncrypted)
    arrayASCIIWords
  }

  public separateComponets(encryptedWord: string) {
    const textASCIISeparated = encryptedWord.split('.')
    return textASCIISeparated
  }

  public validateKeywords(keyWordsToValidate: string, encryptKeyWords: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    arrayASCII = arrayManipulation.reorderArrayOfASCII(arrayASCII)
    arrayASCII = arrayManipulation.splitArrayOfASCII(arrayASCII)

    let textASCII = dataTransform.fromASCIIToText('', arrayASCII)
    return textASCII === encryptKeyWords
  }
}

const decrypt = new Decrypt()
export default decrypt
