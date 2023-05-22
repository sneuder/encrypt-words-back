class MSG {
  public send(success: boolean, msg: string) {
    return { success, msg }
  }

  public object(propertyMSG: string, msgValue: string) {
    return {
      [propertyMSG]: msgValue,
    }
  }
}

const msg = new MSG()
export default msg
