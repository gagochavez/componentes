interface CustomFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
  signal?: AbortSignal;
}

export const helpHttp = () => {
  const customFetch = (endpoint: string, options: CustomFetchOptions) => {
    const defaultiHeader = {
      accept: "applitacion/json",
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultiHeader, ...options.headers }
      : defaultiHeader;

    options.body = options.body || null;
    if (options.body === null) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "000",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((error) => error);
  };

  const get = (url: string, options = {}) => customFetch(url, options);

  const post = (url: string, options: CustomFetchOptions = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url: string, options: CustomFetchOptions = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url: string, options: CustomFetchOptions = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
