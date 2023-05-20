import storage from './data/storage'
import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'

interface ArrayToProcess {
  key: 'arrayASCIIWords' | 'arrayASCIIKeyWord'
  value: string
  string: 'stringASCIIWords' | 'stringASCIIKeyWord'
}

class Encrypt {
  public process(textToConvert: string, keyWords: string) {
    const arraysToProcess: ArrayToProcess[] = [
      {
        key: 'arrayASCIIWords',
        value: textToConvert,
        string: 'stringASCIIWords',
      },
      {
        key: 'arrayASCIIKeyWord',
        value: keyWords,
        string: 'stringASCIIKeyWord',
      },
    ]

    // same process both words and keyword
    arraysToProcess.forEach((itemToProcess) => {
      const textASCIIArray = dataTransform.fromTextToASCIIArray(
        itemToProcess.value
      )

      storage[itemToProcess.key] =
        arrayManipulation.reorderArrayOfASCII(textASCIIArray)

      storage[itemToProcess.key] = arrayManipulation.splitArrayOfASCII(
        storage[itemToProcess.key]
      )
    })

    // reorder keyword again
    storage.arrayASCIIKeyWord = arrayManipulation.reorderArrayOfASCII(
      storage.arrayASCIIKeyWord
    )

    storage.arrayASCIIKeyWord = arrayManipulation.splitArrayOfASCII(
      storage.arrayASCIIKeyWord
    )

    // multiply words and keyword parts
    dataTransform.multiWordsWithKW()

    // from ascii to text
    arraysToProcess.forEach((itemToProcess) => {
      storage[itemToProcess.string] = dataTransform.fromASCIIToText(
        storage[itemToProcess.string],
        storage[itemToProcess.key]
      )
    })

    return storage.joinEncryptWords()
  }
}

const encrypt = new Encrypt()
export default encrypt
