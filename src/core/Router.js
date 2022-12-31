import { Home } from '@/views/Home';

export class Router {
  #element;
  #selector;
  #routes;

  constructor({ selector, routes }) {
    this.#routes = routes;
    this.#selector = selector || '#content';
  }

  #eventInit() {
    window.addEventListener('popstate', () => {
      this.#routing();
    });

    document.addEventListener('click', ({ target }) => {
      const href = target.dataset.href;

      if (href) this.push(href);
    });
  }

  start() {
    const element = document.querySelector(this.#selector);

    if (!element) {
      throw new Error(`${this.#selector}를 찾을 수 없습니다.`);
    }

    this.#element = element;
    this.#routing();
    this.#eventInit();
  }

  push(path) {
    window.location.hash = this.#findRoute(path) === -1 ? '/404' : path;
  }

  #routing() {
    const hashName = window.location.hash.replace('#', '');
    let selectComponent = Object.values(this.#routes)[this.#findRoute(hashName)];

    if (!selectComponent) selectComponent = Home;
    new selectComponent({ element: this.#element });
  }

  #findRoute(path) {
    return Object.keys(this.#routes).findIndex((key) => key === path);
  }
}