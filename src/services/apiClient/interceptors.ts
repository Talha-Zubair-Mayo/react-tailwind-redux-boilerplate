
// let activeRequests: any = [];
// const getEndpointOfUrl = (req: any) => {
//   let fullUrl = new URL(`${req?.baseURL + req?.url}`);
//   return fullUrl.pathname;
// };
// const removeExistingEndpoint = (request: any) => {
//   const index = activeRequests.findIndex(
//     (req: any) =>
//       req.url === getEndpointOfUrl(request) &&
//       req.body === JSON.stringify(request.data) &&
//       req.method === request.method
//   );
//   if (index > -1) {
//     activeRequests.splice(index, 1);
//   }
// };

/**
 * API request interceptor.
 *
 * @param request any
 * @returns any
 */
export const requestInterceptor = (request: any) => {
  // const controller = new AbortController();
  // request.signal = controller.signal;
  // activeRequests
  //   .filter(
  //     (item: any) =>
  //       item.url === getEndpointOfUrl(request) &&
  //       item.body === JSON.stringify(request.data) &&
  //       item.method === request.method
  //   )
  //   .forEach((item: any) => {
  //     item.controller.abort();
  //   });
  
  // activeRequests.push({
  //   url: getEndpointOfUrl(request),
  //   body: JSON.stringify(request.data),
  //   method: request.method,
  //   controller,
  // });
  
  return request;
};

/**
 * API response interceptor.
 *
 * @param response any
 * @returns any
 */
export const responseInterceptor = (response: any) => {
  console.log("API RESPONSE::::::", response);
  // removeExistingEndpoint(response.config);
  return response;
};

export const errorHandler = (error: any) => {
  //   console.log("API ERROR::::::", JSON.stringify(error));
  // removeExistingEndpoint(error?.config);
  const message = error?.response?.data?.message || error?.statusText;
  if (error.code !== "ERR_CANCELED") {
   
  }
  return Promise.reject(error);
};
