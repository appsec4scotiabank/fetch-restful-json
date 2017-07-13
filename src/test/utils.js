export const mockResponseJson = (body) => ({
  json: () => Promise.resolve(body)
});

export const mockResponse = ({ body }) =>
  () => Promise.resolve(mockResponseJson(body));
