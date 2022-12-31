import { Http } from '@/core/Http';
import { Repository } from '@/core/Repository';
import { Validator } from '@/core/Validator';

export class UserService {
  constructor() {
    this.http = new Http('/user');
    this.validator = Validator;
    this.repository = new Repository();
  }

  async #findUser({ email }) {
    const userData = await this.http.get('', {
      email,
    });

    return userData.pop();
  }

  async signUp({ email, password }) {
    const isEmail = this.validator.isEmail(email, '이메일 형식이 올바르지 않습니다.');
    const isPassword = this.validator.isPassword(password, '비밀번호는 영문, 숫자 포함 8자리 이상이여야 합니다.');

    if (isEmail !== true) {
      alert(isEmail);
      return;
    }

    if (isPassword !== true) {
      alert(isPassword);
      return;
    }

    const isDuplicatedData = await this.#findUser(email);

    if (isDuplicatedData) {
      alert('중복된 이메일 입니다.');
      return;
    }

    await this.http.post('', {
      email,
      password,
      registerDate: new Date(),
      loginDate: new Date(),
    });

    return true;
  }

  async signIn({ email, password }) {
    const userData = await this.#findUser(email);

    if (!userData) {
      alert('존재하지 않는 계정입니다.');
      return;
    }

    if (userData.password !== password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    this.repository.set('user', userData);
    return true;
  }
}