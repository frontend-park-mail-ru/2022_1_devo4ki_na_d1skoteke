(() => {
  const AJAX_METHODS = {
    GET: 'get',
    POST: 'post',
  };

  const noop = () => {
  };

  class Ajax {
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

    get({ url, callback }) {
      return this.ajax({
        url,
        callback,
      });
    }

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
