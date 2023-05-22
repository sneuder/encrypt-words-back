import ArrayToProcess from '../../interface/ArrayToProcess'

class Storage {
  private _arrayASCIIWords: number[] = []
  private _arrayASCIIKeyWord: number[] = []
  private _arrayASCIIPositions: number[] = []

  private _stringASCIIWords: string = ''
  private _stringASCIIKeyWord: string = ''
  private _stringASCIIPositions: string = ''

  private _arrayToProcessToASCII: ArrayToProcess[] = []

  public set arrayASCIIWords(value: number[]) {
    this._arrayASCIIWords = value
  }

  public get arrayASCIIWords(): number[] {
    return this._arrayASCIIWords
  }

  public set arrayASCIIKeyWord(value: number[]) {
    this._arrayASCIIKeyWord = value
  }

  public get arrayASCIIKeyWord(): number[] {
    return this._arrayASCIIKeyWord
  }

  public set arrayASCIIPositions(value: number[]) {
    this._arrayASCIIPositions = value
  }

  public get arrayASCIIPositions(): number[] {
    return this._arrayASCIIPositions
  }

  public set stringASCIIWords(value: string) {
    this._stringASCIIWords = value
  }

  public get stringASCIIWords(): string {
    return this._stringASCIIWords
  }

  public set stringASCIIKeyWord(value: string) {
    this._stringASCIIKeyWord = value
  }

  public get stringASCIIKeyWord(): string {
    return this._stringASCIIKeyWord
  }

  public set stringASCIIPositions(value: string) {
    this._stringASCIIPositions = value
  }

  public get stringASCIIPositions(): string {
    return this._stringASCIIPositions
  }

  public arrayToProcessToASCII(
    textToConvert: string,
    keyWord: string
  ): ArrayToProcess[] {
    this._arrayToProcessToASCII = [
      {
        array: 'arrayASCIIWords',
        value: textToConvert,
        string: 'stringASCIIWords',
      },
      {
        array: 'arrayASCIIKeyWord',
        value: keyWord,
        string: 'stringASCIIKeyWord',
      },
    ]

    return this._arrayToProcessToASCII
  }

  public arrayToProcessToText(): ArrayToProcess[] {
    const firtPart = this._arrayToProcessToASCII
    return firtPart.concat({
      array: 'arrayASCIIPositions',
      string: 'stringASCIIPositions',
      value: '',
    })
  }

  public joinEncryptWords() {
    return `${storage.stringASCIIWords}.${storage.stringASCIIKeyWord}.${storage.stringASCIIPositions}`
  }

  public organizeDecryptWords() {
    return { words: '', keyword: '' }
  }
}

const storage = new Storage()
export default storage
