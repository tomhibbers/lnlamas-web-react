/* eslint-env jest */

import ChaptersService from "../ChaptersService";
// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock("../request-service");

const service = ChaptersService;

// A simple example test
describe("#getAllChapters() using Promises", () => {
  it("should load user data", () => {
    return service.getAllChapters().then((data: any) => {
      expect(data).toBeDefined();
      //   expect(data.entity.name).toEqual("Koen van Gilst");
    });
  });
});
// The exact same test using async/await
describe("#getAllChapters() using async/await", () => {
  it("should load user data", async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const data = await service.getAllChapters();
    expect(data).toBeDefined();
    // expect(data.entity.name).toEqual('Koen van Gilst')
  });
});
