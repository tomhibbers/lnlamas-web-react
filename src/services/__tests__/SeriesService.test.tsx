/* eslint-env jest */

import SeriesService from "../SeriesService";
// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock("../request-service");

const service = SeriesService;

// A simple example test
describe("#getAllSeries() using Promises", () => {
  it("should load user data", () => {
    return service.getAllSeries().then((data: any) => {
      expect(data).toBeDefined();
      //   expect(data.entity.name).toEqual("Koen van Gilst");
    });
  });
});
// The exact same test using async/await
describe("#getAllSeries() using async/await", () => {
  it("should load user data", async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const data = await service.getAllSeries();
    expect(data).toBeDefined();
    // expect(data.entity.name).toEqual('Koen van Gilst')
  });
});
