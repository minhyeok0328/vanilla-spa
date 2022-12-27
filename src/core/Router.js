import { Home } from '@/views/Home';

export class Router {
  #element;
  #selector;
  routes;

  constructor({ selector, routes }) {
    this.routes = routes;
    this.#selector = selector;
  }

  start() {
    this.#element = document.querySelector(this.#selector);
  
    window.addEventListener('popstate', () => {
      this.#routing();
    });

    document.addEventListener('click', ({ target }) => {
      const href = target.dataset.href;

      if (href) this.push(href);
    });

    this.#routing();
  }

  push(path) {
    window.location.hash = this.#findRoute(path) === -1 ? '/404' : path;
  }

  #routing() {
    const hashName = window.location.hash.replace('#', '');
    let selectComponent = Object.values(this.routes)[this.#findRoute(hashName)];

    if (!selectComponent) selectComponent = Home;
    new selectComponent({ element: this.#element });
  }

  #findRoute(path) {
    return Object.keys(this.routes).findIndex((key) => key === path);
  }
}