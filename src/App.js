import { setupRouter } from './router/index.js';

export default function App({ element }) {
  setupRouter();

  element.innerHTML = `
    <header>
      <ul>
        <li data-href="/">Home</li>
        <li data-href="/signup">SignUp</li>
        <li data-href="/sdgf">SignIn</li>
      </ul>
    </header>
    <section id="content"></section>
    <footer>Footer</footer>
  `;
}