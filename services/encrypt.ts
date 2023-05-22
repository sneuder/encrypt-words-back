import ArrayToProcess from '../interface/ArrayToProcess'

import storage from './data/storage'
import dataTransform from './data/dataTransform'
import arrayManipulation from './data/arrayManipulation'

class Encrypt {
  public process(textToConvert: string, arrayWords: string) {
    const arraysToProcess: ArrayToProcess[] = storage.arrayToProcessToASCII(
      textToConvert,
      arrayWords
    )

    // same process both words and keywords
    arraysToProcess.forEach((itemToProcess) => {
      const textASCIIArray = dataTransform.fromTextToASCIIArray(
        itemToProcess.value
      )

      storage[itemToProcess.array] =
        arrayManipulation.reorderASCIIArray(textASCIIArray)

      storage[itemToProcess.array] = arrayManipulation.splitASCIIArray(
        storage[itemToProcess.array]
      )
    })

    // reorder arraywords again
    storage.arrayASCIIWords = arrayManipulation.reorderASCIIArray(
      storage.arrayASCIIWords
    )

    storage.arrayASCIIWords = arrayManipulation.splitASCIIArray(
      storage.arrayASCIIWords
    )

    // multiply words and arrayword parts
    dataTransform.multiWordsWithKW()

    // from asciiArray to text
    const arrayToText = storage.arrayToProcessToText()
    arrayToText.forEach((itemToProcess) => {
      storage[itemToProcess.string] = dataTransform.fromASCIIToText(
        storage[itemToProcess.string],
        storage[itemToProcess.array]
      )
    })

    return storage.joinEncryptWords()
  }
}

const encrypt = new Encrypt()
export default encrypt
