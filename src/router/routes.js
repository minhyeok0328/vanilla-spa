import { Home } from '@/views/Home';
import { SignUp } from '@/views/SignUp';
import { NotFound } from '@/views/NotFound';

const routes = {
  '/': Home,
  '/404': NotFound,
  '/signup': SignUp,
};

export default routes;