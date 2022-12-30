const baseURL = 'http://localhost:3000';

export class Http {
  #baseURL;
  #timeout;
  
  constructor(basePath, timeout = 5000) {
    this.#baseURL = `${baseURL}${basePath}`;
    this.#timeout = timeout;
  }

  async get(path, params) {
    const queryString = Object.keys(params).map((key, index) => (`
      ${!index ? '?' : '&'}${key}=${params[key]}
    `)).join('').trim();

    const response = await Promise.race([
      fetch(`${this.#baseURL}${path}${queryString}`),
      new Promise((resolve) => setTimeout(() => resolve(false), this.#timeout)),
    ]);

    if (!response) throw new Error('Timeout');
    return response.json();
  }

  async post(path, body) {
    const response = await Promise.race([
      fetch(`${this.#baseURL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      }),
      new Promise((resolve) => setTimeout(() => resolve(false), this.#timeout)),
    ]);

    if (!response) throw new Error('Timeout');
    return response
  }
}