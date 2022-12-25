import Home from '../views/Home.js';
import NotFound from '../views/404.js';
import SignUp from '../views/SignUp.js';

const routes = {
  '/': Home,
  '/404': NotFound,
  '/signup': SignUp,
};

export default routes;