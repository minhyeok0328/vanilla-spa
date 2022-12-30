import { Component } from '@/core/Component';
import { UserService } from '@/service/UserService';
import router from '@/router';
export class SignUp extends Component {
  setup() {
    this.userService = new UserService();
  }
  onMounted() {
    this.addEvent('click', '.signup', () => {
      this.signUp();
    });
  }
  async signUp() {
    const email = this.selector('[name="email"]').value;
    const password = this.selector('[name="password"]').value;

    const success = await this.userService.signUp({ email, password });
    if (success) {
      alert('회원가입이 완료되었습니다.');
      router.push('/');
    }
  }
  template() {
    return `
      <h2>Sign Up</h2>
      <div>
      <input type="email" name="email" placeholder="Email" /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <button type="button" class="signup">Sign Up</button>
      </div>
    `;
  }
}