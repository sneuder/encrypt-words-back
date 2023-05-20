class Storage {
  private _encryptedWord: string = ''

  private _arrayASCIIWords: number[] = []
  private _arrayASCIIKeyWord: number[] = []
  private _arrayASCIIPosition: number[] = []

  private _stringASCIIWords: string = ''
  private _stringASCIIKeyWord: string = ''

  public set encryptedWord(value: string) {
    this._encryptedWord = value
  }

  public get encryptedWord(): string {
    return this._encryptedWord
  }

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

  public set arrayASCIIPosition(value: number[]) {
    this._arrayASCIIPosition = value
  }

  public get arrayASCIIPosition(): number[] {
    return this._arrayASCIIPosition
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

  public joinEncryptWords() {
    return `${storage.stringASCIIWords}.${storage.stringASCIIKeyWord}.${storage.arrayASCIIPosition}`
  }
}

const storage = new Storage()
export default storage
