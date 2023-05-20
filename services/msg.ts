class MSG {
  public send(success: boolean, msg: string) {
    return { success, msg }
  }
}

const msg = new MSG()
export default msg
