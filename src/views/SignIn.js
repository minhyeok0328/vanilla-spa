import { Component } from '@/core/Component';
import router from '@/router';
import { UserService } from '@/service/UserService';

export class SignIn extends Component {
  setup() {
    this.userService = new UserService();
  }

  onMounted() {
    this.addEvent('click', '.signin', () => {
      this.signIn();
    });
  }

  async signIn() {
    const email = this.selector('[name="email"]').value;
    const password = this.selector('[name="password"]').value;

    const status = this.userService.signIn({ email, password })

    if (status === true) {
      alert('로그인 되었습니다.');
      router.push('/');
    }
  }

  template() {
    return `
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" class="signin">Sign In</button>
    `;
  }
}