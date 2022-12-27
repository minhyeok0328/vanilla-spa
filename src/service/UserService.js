import { Http } from '@/core/Http';

export class UserService {
  constructor() {
    this.http = new Http('/user');
  }

  async signUp({ id, password, name, email }) {

  }
}