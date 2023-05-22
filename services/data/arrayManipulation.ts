class ArrayManipulation {
  public reorderASCIIArray(arrayASCII: number[]) {
    if (arrayASCII.length === 1) return arrayASCII
    let tempItem: number | null = null

    return arrayASCII.map((itemASCII, index) => {
      const pointer = index + 1
      if (pointer % 2 === 0) return tempItem

      if (arrayASCII[pointer] === undefined) return itemASCII

      tempItem = itemASCII
      return arrayASCII[pointer]
    }) as number[]
  }

  public splitASCIIArray(arrayASCII: number[]) {
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
