/* eslint-disable class-methods-use-this,no-param-reassign */
import { eventBus } from './eventBus.js';
import { routes } from '../consts/routes.js';
import { events } from '../consts/events.js';

export class Router {
  constructor(page) {
    this.routes = new Set();
    this.page = page;
    this.currentController = null;
    eventBus.on(events.pathChanged, this.onPathChanged);
    eventBus.on(events.redirectBack, this.onRedirectBack);
    eventBus.on(events.redirectForward, this.onRedirectForward);

    if (page) {
      this.page.addEventListener('click', (e) => {
        const { target } = e;
        const closestLink = target.closest('a');
        if (!closestLink || target.matches('not-route')
          || closestLink?.matches('not-route')) {
          return;
        }
        e.preventDefault();
        const data = { ...closestLink.dataset };
        data.URL = closestLink.getAttribute('href');
        eventBus.emit(events.pathChanged, data);
      });
    }
  }

  onPathChanged = (data) => {
    this.go(`/${data.URL}`);
  };

  go = (URL = '/') => {
    // console.log('current URL: ', URL);
    const routeData = this.getURLData(URL);
    const data = { ...routeData };
    if (this.currentController) {
      this.currentController.unsubscribe();
    }
    this.currentController = routeData.controller;
    if (!this.currentController) {
      return;
    }
    // console.log('current Controller: ', this.currentController);
    this.currentController.subscribe();
    if (!this.currentController) {
      URL = routes.notesPage;
      this.currentController = this.getURLData(URL).controller;
    }
    if (window.location.pathname !== URL) {
      window.history.pushState(null, null, URL);
    }
    this.currentController.view.render(data);
    eventBus.emit(events.router.go, URL);
  };

  getURLData = (URL) => {
    let targetController = null;
    const result = this.getParameters(URL);
    this.routes.forEach((route) => {
      const tmpResult = result.URL.match(route.URL);
      if (tmpResult) {
        targetController = route.controller;
      }
    });
    return {
      controller: targetController,
      data: result.data,
      URL: {
        URL: result.URL,
        resourceID: +result.URLParameters,
      },
    };
  };

  getParameters = (currentURL = '/') => {
    const parsedURL = new URL(window.location.origin + currentURL);
    const URLParameters = null;
    const resultURL = parsedURL.pathname;
    return {
      URL: resultURL,
      data: currentURL.substring(1),
      URLParameters,
    };
  };

  onRedirectBack = () => {
    window.history.back();
  };

  onRedirectForward = () => {
    window.history.forward();
  };

  start = () => {
    window.addEventListener('popstate', () => {
      this.go(window.location.pathname);
    });
    this.go(window.location.pathname + window.location.search);
  };

  register = (URL, controller) => {
    this.routes.add({ URL, controller });
    return this;
  };
}
