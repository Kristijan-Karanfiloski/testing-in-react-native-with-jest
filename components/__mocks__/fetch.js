const mockResponse = {
  data: {
    username: "atuny0",
    password: "9uQFF1Lh",
  },
};

export default {
  post: jest.fn().mockResolvedValue(mockResponse),
};
