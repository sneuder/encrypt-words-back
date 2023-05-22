class ArrayManipulation {
  public reorderASCIIArray(arrayASCII: number[] | string[]) {
    if (arrayASCII.length === 1) return arrayASCII
    let tempItem: number | string

    return arrayASCII.map((itemASCII, index) => {
      const pointer = index + 1
      if (pointer % 2 === 0) return tempItem

      if (arrayASCII[pointer] === undefined) return itemASCII

      tempItem = itemASCII
      return arrayASCII[pointer]
    }) as number[] | string[]
  }

  public splitASCIIArray(arrayASCII: number[] | string[]) {
    if (arrayASCII.length === 1) return arrayASCII

    const middle = Math.ceil(arrayASCII.length / 2)
    return [
      ...arrayASCII.slice(middle, arrayASCII.length + 1),
      ...arrayASCII.slice(0, middle),
    ]
  }
}

const arrayManipulation = new ArrayManipulation()
export default arrayManipulation
