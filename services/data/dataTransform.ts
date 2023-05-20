class DataTransform {
  public fromTextToASCIIArray(textToConvert: string) {
    return textToConvert
      .split('')
      .map((_character, index) => textToConvert.charCodeAt(index))
  }

  public fromASCIIToText(stringToCreate: string, targetArrayASCII: number[]) {
    stringToCreate = targetArrayASCII
      .map((itemASCII) => {
        const numbersCharCode = Array.from(String(itemASCII), Number)
        return numbersCharCode
          .map((subItemASCII, index) => {
            if (index % 2 === 0) return subItemASCII + 65 + index * 3
            return String.fromCharCode(subItemASCII + 65 + index * 3)
          })
          .join('')
      })
      .join('')

    return stringToCreate
  }
}

const dataTransform = new DataTransform()
export default dataTransform
