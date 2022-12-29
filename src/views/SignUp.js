import { Component } from '@/core/Component';
import { UserService } from '@/service/UserService';

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

    const response = await this.userService.signUp({ email, password });
    console.log(response);
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