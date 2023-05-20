import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'

class Decrypt {
  public separateComponets(encryptedWord: string) {
    const textASCIISeparated = encryptedWord.split('.')
    return textASCIISeparated
  }

  public validateKeywords(keyWordsToValidate: string, encryptKeyWords: string) {
    let arrayASCII = dataTransform.fromTextToASCIIArray(keyWordsToValidate)

    for (let index = 0; index < 2; index++) {
      arrayASCII = arrayManipulation.reorderArrayOfASCII(arrayASCII)
      arrayASCII = arrayManipulation.splitArrayOfASCII(arrayASCII)
    }

    let textASCII = dataTransform.fromASCIIToText('', arrayASCII)
    console.log(textASCII, encryptKeyWords)
    return textASCII === encryptKeyWords
  }
}

const decrypt = new Decrypt()
export default decrypt
