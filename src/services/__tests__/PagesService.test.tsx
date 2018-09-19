/* eslint-env jest */

import PagesService from "../PagesService";
// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock("../request-service");

const service = PagesService;

// A simple example test
describe("#getAllPages() using Promises", () => {
  it("should load user data", () => {
    return service.getAllPages().then((data: any) => {
      expect(data).toBeDefined();
      //   expect(data.entity.name).toEqual("Koen van Gilst");
    });
  });
});
// The exact same test using async/await
describe("#getAllPages() using async/await", () => {
  it("should load user data", async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const data = await service.getAllPages();
    expect(data).toBeDefined();
    // expect(data.entity.name).toEqual('Koen van Gilst')
  });
});
