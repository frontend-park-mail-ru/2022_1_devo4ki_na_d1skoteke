/* eslint-disable class-methods-use-this */
// import { EventBus  from './eventBus.js';
import { routes } from '../consts/routes.js';
import { events } from '../consts/events.js';
import EventBus from './eventBus.js';


// eventBus
export class Router {
  constructor(page) {
    this.routes = new Set();

    // console.log("current routes", this.routes);
    this.page = page;

    this.currentController = null;
    EventBus.on(events.pathChanged, this.onPathChanged);
    EventBus.on(events.redirectBack, this.onRedirectBack);
    EventBus.on(events.redirectForward, this.onRedirectForward);


    console.log(  "if page: ",Boolean(page));
    if (page) {
      this.page.addEventListener('click', (e) => {
        const target = e.target;

        // const datasection = e.target.dataset.section;
        // console.log("things from router: ", datasection);
        // let data = datasection;

        console.log("target: ",target);
        const closestLink = target.closest('a');
        console.log("closestLink: ", closestLink);
        if (!closestLink) {
          console.log("doesn't exist closest shit")
          return;
        }
        // e.
        
        // if (!closestLink || target.matches('not-route')
        //   || closestLink?.matches('not-route')) {
        //   return;
        // }
        e.preventDefault();
        const data = { ...closestLink.dataset };

        console.log("data in closest a: ",data);
        data.URL = closestLink.getAttribute('href');
        EventBus.emit(events.pathChanged, data);
        console.log("EMITTING EVENT: ", data.href);
      });
    }

    console.log("from router page: ",page);


    // page.events
  }



  onPathChanged = (data) => {
    this.go(data);
  };

  go = (URL = '/') => {

    console.log("path changed we are going to ", URL);
    URL = URL.href;
    const routeData = this.getURLData(URL);
    const data = { ...routeData };
    if (this.currentController) {
      console.log("must have unsubscribe");

      // this.currentController.unsubscribe();
    }

    this.currentController = routeData.controller;
    // subscribe for controller somehow
    // this.currentController.subscribe();
    console.log("subscribe for controller somehow", this.currentController);

    console.log("URL: ", URL);

    if (!this.currentController) {
      this.currentController = this.getURLData(routes.notesPage).controller;
    }
    if (window.location.pathname !== URL) {
      window.history.pushState(null, null, URL);
    }
    // this.currentController.render(data);
    // EventBus.emit(events.router.go);
  };

  getURLData = (URL) => {
    let targetController = null;
    const result = this.getParameters(URL);

    console.log("result.data; ", result.data)

    console.log("this.routes: ", this.routes);
    this.routes.forEach((route) => {
      const tmpResult = result.URL.match(route.URL);
      if (tmpResult) {
        targetController = route.controller;
      }

      console.log("controller is ", targetController);
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
    console.log("getParameters:",window.location.origin +currentURL );
    const parsedURL = new URL(window.location.origin + currentURL);
    const URLParameters = null;
    const resultURL = parsedURL.pathname;

    console.log("NEW URL: ", {
      URL: resultURL,
      URLParameters,
    } )
    return {
      URL: resultURL,
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
      this.go(window.location.pathname + window.location.search);
    });
    this.go(window.location.pathname + window.location.search);
  };

  register = (URL, controller) => {
    this.routes.add({ URL, controller });
    console.log("current routes", this.routes);
    return this;
  };
}
