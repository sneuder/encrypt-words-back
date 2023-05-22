import ArrayToProcess from '../../interface/ArrayToProcess'

class Storage {
  private _arrayTextWords: string[] = []
  private _arrayTextKeyWords: string[] = []
  private _arrayTextPositions: string[] = []

  private _arrayASCIIWords: (string | number)[] = []
  private _arrayASCIIKeyWords: (string | number)[] = []
  private _arrayASCIIPositions: (string | number)[] = []

  private _stringASCIIWords: string = ''
  private _stringASCIIKeyWords: string = ''
  private _stringASCIIPositions: string = ''

  private _arrayToProcessToASCII: ArrayToProcess[] = []

  public set arrayTextWords(value: string[]) {
    this._arrayTextWords = value
  }

  public get arrayTextWords(): string[] {
    return this._arrayTextWords
  }

  public set arrayTextKeyWords(value: string[]) {
    this._arrayTextKeyWords = value
  }

  public get arrayTextKeyWords(): string[] {
    return this._arrayTextKeyWords
  }

  public set arrayTextPositions(value: string[]) {
    this._arrayTextPositions = value
  }

  public get arrayTextPositions(): string[] {
    return this._arrayTextPositions
  }

  public set arrayASCIIWords(value: (string | number)[]) {
    this._arrayASCIIWords = value
  }

  public get arrayASCIIWords(): (string | number)[] {
    return this._arrayASCIIWords
  }

  public set arrayASCIIKeyWords(value: (string | number)[]) {
    this._arrayASCIIKeyWords = value
  }

  public get arrayASCIIKeyWords(): (string | number)[] {
    return this._arrayASCIIKeyWords
  }

  public set arrayASCIIPositions(value: (string | number)[]) {
    this._arrayASCIIPositions = value
  }

  public get arrayASCIIPositions(): (string | number)[] {
    return this._arrayASCIIPositions
  }

  public set stringASCIIWords(value: string) {
    this._stringASCIIWords = value
  }

  public get stringASCIIWords(): string {
    return this._stringASCIIWords
  }

  public set stringASCIIKeyWords(value: string) {
    this._stringASCIIKeyWords = value
  }

  public get stringASCIIKeyWords(): string {
    return this._stringASCIIKeyWords
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
        array: 'arrayASCIIKeyWords',
        value: keyWord,
        string: 'stringASCIIKeyWords',
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
    return `${storage.stringASCIIWords}.${storage.stringASCIIKeyWords}.${storage.stringASCIIPositions}`
  }

  public organizeDecryptWords() {
    return { words: '', keyword: '' }
  }
}

const storage = new Storage()
export default storage
