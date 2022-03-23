/**
 * module for ajax requests
 * @module ajax
 */
(() => {
  const AJAX_METHODS = {
    GET: 'get',
    POST: 'post',
  };

  /**
   * Function that does noting
   * used for default callback in ajax requests
   */
  const noop = () => {
  };

  /** Class representing Ajax */
  class Ajax {
    /**
     * main function for requests which creates, sends requests and get
     * response status and text in callback function
     * @param {Object} - object of url, ajax method, body and callback of request
     */
    // eslint-disable-next-line class-methods-use-this
    ajax(
      {
        url = '/',
        method = AJAX_METHODS.GET,
        body = null,
        callback = noop,
      },
    ) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        callback(xhr.status, xhr.responseText);
      });

      if (body) {
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf8');
        xhr.send(JSON.stringify(body));
        return;
      }

      xhr.send();
    }

    /**
     * Convenient wrapper for GET request
     * calls main ajax method with GET method and empty body
     * @params {Object} - url and callback of request
     */
    get({ url, callback }) {
      return this.ajax({
        url,
        callback,
      });
    }

    /**
     * Convenient wrapper for POST request
     * calls main ajax method with POST method
     * @params {Object} - url, body and callback of request
     */
    post({ url, body, callback }) {
      return this.ajax({
        url,
        body,
        callback,
        method: AJAX_METHODS.POST,
      });
    }
  }

  window.Ajax = new Ajax();
})();
