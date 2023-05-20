class ArrayManipulation {
  public reorderArrayOfASCII(arrayASCII: number[]) {
    let tempItem: number | null = null

    return arrayASCII.map((itemASCII, index) => {
      const pointer = index + 1
      if (pointer % 2 === 0) return tempItem

      tempItem = itemASCII
      return arrayASCII[pointer]
    }) as number[]
  }

  public splitArrayOfASCII(arrayASCII: number[]) {
    const middle = Math.ceil(arrayASCII.length / 2)
    return [
      ...arrayASCII.slice(middle, arrayASCII.length + 1),
      ...arrayASCII.slice(0, middle),
    ]
  }
}

const arrayManipulation = new ArrayManipulation()
export default arrayManipulation
