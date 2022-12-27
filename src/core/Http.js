export class Http {
  #baseURL;
  #timeout;
  
  constructor() {
    this.#baseURL = 'http://localhost:3000';
    this.#timeout = 1000;
  }

  async get(path, params) {
    const queryString = Object.keys(params).map((key, index) => (`
      ${!index ? '?' : '&'}${key}=${obj[key]}
    `)).join('');

    const response = await Promise.race([
      fetch(`${this.#baseURL}${path}${queryString}`),
      new Promise((resolve) => setTimeout(() => resolve(false), this.#timeout)),
    ]);

    if (!response) throw new Error('Timeout');
    return result.json();
  }
}