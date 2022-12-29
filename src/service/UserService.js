import { Http } from '@/core/Http';
import { Validator } from '@/core/Validator';

export class UserService {
  constructor() {
    this.http = new Http('/user');
    this.validator = Validator;
  }

  async signUp({ email, password }) {
    const isEmail = this.validator.isEmail(email, '이메일 형식이 올바르지 않습니다.');
    const isPassword = this.validator.isPassword(password, '비밀번호는 영문, 숫자 포함 8자리 이상이여야 합니다.');

    if (isEmail) {
      alert(isEmail);
      return;
    }

    if (!isPassword) {
      alert(isPassword);
      return;
    }

    await this.http.post('/user', {
      email,
      password,
      registerDate: new Date(),
      loginDate: new Date(),
    });

    return true;
  }
}