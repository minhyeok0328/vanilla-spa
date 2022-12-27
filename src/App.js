import { Component } from '@/core/Component';
import router from '@/router';

export class App extends Component {
  onMounted() {
    router.start();
  }
  template() {
    return `
      <header>
        <nav>
          <div data-href="/">Home</div>
          <ul>
            <li data-href="/signup">SignUp</li>
            <li>SignIn</li>
          </ul>
        </nav>
      </header>
      <section id="content"></section>
    `;
  }
}