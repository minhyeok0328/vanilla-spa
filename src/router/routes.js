import { Home } from '@/views/Home';
import { SignUp } from '@/views/SignUp';
import { NotFound } from '@/views/NotFound';
import { SignIn } from '@/views/SignIn';

const routes = {
  '/': Home,
  '/404': NotFound,
  '/signup': SignUp,
  '/signin': SignIn,
};

export default routes;