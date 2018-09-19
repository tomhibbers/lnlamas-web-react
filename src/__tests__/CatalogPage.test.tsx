import * as React from "react";
import * as ReactDOM from "react-dom";
import CatalogPage from "../containers/CatalogPage/CatalogPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CatalogPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// // it("fetches data from unsplash", async () => {
// //   // setup
// //   mockAxios.get(() =>
// //     Promise.resolve({
// //       data: { results: ["cat.jpg"] }
// //     })
// //   );

// //   // work
// //   const images = await unsplash("cats");

// //   // expect
// //   expect(images).toEqual(["cat.jpg"]);
// //   expect(mockAxios.get).toHaveBeenCalledTimes(1);
// //   expect(mockAxios.get).toHaveBeenCalledWith(
// //     "https://api.unsplash.com/search/photos",
// //     {
// //       params: {
// //         client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
// //         query: "cats"
// //       }
// //     }
// //   );
// // });
// // it("returns data when sendMessage is called", done => {
// //   var mock = new MockAdapter(axios);
// //   const data = { response: true };
// //   mock
// //     .onGet("https://us-central1-hutoma-backend.cloudfunctions.net/chat")
// //     .reply(200, data);

// //   chatbot.sendMessage(0, "any").then(response => {
// //     expect(response).toEqual(data);
// //     done();
// //   });
// // });
// // it("MyComponent snapshot test", () => {
// //   const wrapper = shallow(<CatalogPage />);
// //   expect(wrapper).toMatchSnapshot();
// // });
// it("api test", () => {
//   moxios.wait(() => {
//     let request = moxios.requests.mostRecent()
//     request.respondWith({
//       status: 200,
//       response: [
//         { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
//         { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
//       ]
//     }).then(() => {
//       let list = document.querySelector('.UserList__Data')
//       equal(list.rows.length, 2)
//       equal(list.rows[0].cells[0].innerHTML, 'Fred')
//       equal(list.rows[1].cells[0].innerHTML, 'Wilma')
//       done()
//     })
//   })
// });
