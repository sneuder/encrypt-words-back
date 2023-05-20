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

    // same process both words and arrayword
    arraysToProcess.forEach((itemToProcess) => {
      const textASCIIArray = dataTransform.fromTextToASCIIArray(
        itemToProcess.value
      )

      storage[itemToProcess.array] =
        arrayManipulation.reorderArrayOfASCII(textASCIIArray)

      storage[itemToProcess.array] = arrayManipulation.splitArrayOfASCII(
        storage[itemToProcess.array]
      )
    })

    // reorder arrayword again
    storage.arrayASCIIWords = arrayManipulation.reorderArrayOfASCII(
      storage.arrayASCIIWords
    )

    storage.arrayASCIIWords = arrayManipulation.splitArrayOfASCII(
      storage.arrayASCIIWords
    )

    // multiply words and arrayword parts
    dataTransform.multiWordsWithKW()

    // from ascii to text
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
