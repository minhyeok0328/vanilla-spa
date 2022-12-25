export function onMounted(callback) {
  document.addEventListener('onMounted', callback, { once: true });
}

export function reactive(initialState = {}) {
  const proxy = new Proxy(
    initialState,
    {
      get(target, key, receiver) {
        console.log('get', {
          target, key, receiver
        })
        return target[key];
      },
      set(target, key, value, receiver) {
        console.log('set', {
          target, key, value, receiver
        })
        return target;
      },
    },
  );

  return proxy;
}