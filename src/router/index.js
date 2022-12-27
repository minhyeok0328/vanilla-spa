import routes from './routes.js';
import { observe } from '../hooks/useHooks.js';

let element = null;

const findRoute = (selectPath) => (
  Object.keys(routes).findIndex((path) => path.includes(selectPath))
);

const routing = () => {
  const selectPath = window.location.hash.replace('#/', '');
  let selectComponent = null;
  selectComponent = Object.values(routes)[findRoute(selectPath)];

  if (selectComponent) {
    selectComponent?.setup();
    element.innerHTML = selectComponent.render();

    const onMounted = new Event('onMounted');
    document.dispatchEvent(onMounted);
  }
};

export const useRouter = () => ({
  push: (url) => {
    window.location.hash = findRoute(url) === -1 ? '/404' : url;
  },
});

export const setupRouter = () => {
  window.addEventListener('popstate', routing);

  window.onload = () => {
    element = document.querySelector('#content');
    document.addEventListener('click', ({ target }) => {
      if (target.dataset.href) {
        const router = useRouter();

        router.push(target.dataset.href);
      }
    });

    routing();
  };
};