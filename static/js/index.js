import Login from './views/login.js';
import Signup from './views/signup.js';

// const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
//
// const routes = [
//     // { path: '/', view: Notes },
//     { path: '/login', view: Login },
//     { path: '/signup', view: Signup },
// ];
//
// const findViewByPath = (path, routes) =>
//     routes.find(r =>
//         r.path.match(new RegExp(`^\\${path}$`, 'gm')))
//         || undefined;
//
// const router = () => {
//     const path = parseLocation();
//     const { view = Notes } = findViewByPath(path, routes) || {};
//     view();
// };
//
// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);
Login();
Signup();
