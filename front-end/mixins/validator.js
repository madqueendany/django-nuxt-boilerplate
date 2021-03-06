export function email(value) {
  // eslint-disable-next-line
  const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !value || emailReg.test(value) || 'E-mail must be valid'
}
export function required(value) {
  const msg = 'This field is required'
  if (!value) {
    return msg
  }
  return value.trim().length !== 0 || msg
}
