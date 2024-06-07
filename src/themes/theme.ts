export type Theme = {
  primaryColor: string
  secondaryColor: string
  terciaryColor: string
  inputColor: string
  errorColor: string
  errorBgColor: string
  buttonDisabledColor: string
  buttonTextDisabledColor: string
}

const defaultTheme: Theme = {
  primaryColor: '#e66767',
  secondaryColor: '#ffebd9',
  terciaryColor: '#fff',
  inputColor: '#4b4b4b',
  errorColor: '#8B0500',
  errorBgColor: '#E64E4E',
  buttonDisabledColor: '#C5B5A7',
  buttonTextDisabledColor: '#8E4040'
}

export default defaultTheme
