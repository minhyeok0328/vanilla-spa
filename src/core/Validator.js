export class Validator {
  static isEmail(value, errorMessage) {
    const emailRegExp = new RegExp(/([a-zA-Z0-9_-]+@+[a-zA-Z0-9]+\.+[a-zA-Z0-9])/);

    return !emailRegExp.test(value) ? errorMessage : null;
  }

  static isPassword(value, errorMessage) {
    const passwordRegExp = new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}/);

    return !passwordRegExp.test(value) ? errorMessage : null;
  }
}