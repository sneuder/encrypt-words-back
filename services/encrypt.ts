import dataTransform from './data/dataTransform'

interface ArrayToProcess {
  key: 'arrayASCIIWords' | 'arrayASCIIKeyWord'
  value: string
  string: 'stringASCIIWords' | 'stringASCIIKeyWord'
}

class Encrypt {
  // private encryptedWord: string = ''

  private arrayASCIIWords: number[] = []
  private arrayASCIIKeyWord: number[] = []
  private arrayASCIIPosition: number[] = []

  private stringASCIIWords: string = ''
  private stringASCIIKeyWord: string = ''
  // private stringASCIIPosition: string = ''

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
      this[itemToProcess.key] = this.reorderArrayOfASCII(textASCIIArray)
      this[itemToProcess.key] = this.splitArrayOfASCII(this[itemToProcess.key])
    })

    // reorder keyword again
    this.arrayASCIIKeyWord = this.reorderArrayOfASCII(this.arrayASCIIKeyWord)
    this.arrayASCIIKeyWord = this.splitArrayOfASCII(this.arrayASCIIKeyWord)

    // multiply words and keyword parts
    this.multiWordsWithKW()

    // from ascii to text
    arraysToProcess.forEach((itemToProcess) => {
      this[itemToProcess.string] = dataTransform.fromASCIIToText(
        this[itemToProcess.string],
        this[itemToProcess.key]
      )
    })

    return this.joinEncryptWords()
  }

  private reorderArrayOfASCII(arrayASCII: number[]) {
    let tempItem: number | null = null

    return arrayASCII.map((itemASCII, index) => {
      const pointer = index + 1
      if (pointer % 2 === 0) return tempItem

      tempItem = itemASCII
      return arrayASCII[pointer]
    }) as number[]
  }

  private splitArrayOfASCII(arrayASCII: number[]) {
    const middle = Math.ceil(arrayASCII.length / 2)
    return [
      ...arrayASCII.slice(middle, arrayASCII.length + 1),
      ...arrayASCII.slice(0, middle),
    ]
  }

  private multiWordsWithKW() {
    this.arrayASCIIWords = this.arrayASCIIWords.map((itemASCII, index) => {
      const resultOperation = itemASCII * this.arrayASCIIKeyWord[index]
      this.saveWordPositions(resultOperation.toString().length)
      return resultOperation
    })
  }

  private saveWordPositions(positionValue: number) {
    this.arrayASCIIPosition.push(positionValue)
  }

  private joinEncryptWords() {
    return `${this.stringASCIIWords}.${this.stringASCIIKeyWord}.${this.arrayASCIIPosition}`
  }
}

const encrypt = new Encrypt()
export default encrypt
