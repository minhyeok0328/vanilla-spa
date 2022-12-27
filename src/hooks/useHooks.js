export function onMounted(callback) {
  document.addEventListener('onMounted', callback, { once: true });
}

let currentObserve = null;
export function observe(fn) {
  currentObserve = fn;
  fn();
  currentObserve = null;
};

const targetMap = new WeakMap();
export function reactive(initialState = {}) {
  const track = (target, key) => {
    if (!currentObserve) return;

    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, (depsMap = new Map()));

    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, (dep = new Set()));

    if (!dep.has(currentObserve)) dep.add(currentObserve);
  };

  const trigger = (target, key) => {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;

    const dep = depsMap.get(key);
    if (dep) dep.forEach((effect) => effect());
  };

  const proxy = new Proxy(
    initialState,
    {
      get(target, key, receiver) {
        const response = Reflect.get(target, key, receiver);
        track(target, key);

        return response;
      },
      set(target, key, value, receiver) {
        const oldValue = target[key];
        const response = Reflect.set(target, key, value, receiver);

        if (oldValue !== response) trigger(target, key, value, oldValue);

        return target;
      },
    },
  );

  return proxy;
}