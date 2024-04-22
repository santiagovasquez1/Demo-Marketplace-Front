import { CanMatchFn, Router, UrlTree } from '@angular/router';

export const isLoggedInGuard: CanMatchFn = (route, segments,) => {
  const router: Router = new Router();
  return localStorage.getItem("chainToken") ? true : router.parseUrl('/login');

};
