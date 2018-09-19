// import axios from "axios";

// const SeriesService = {
//   getAllSeries() {
//     return axios
//       .get("https://localhost:44372/api/series")
//       .then(result => {
//         return result.data;
//       })
//       .catch(error => {
//         throw error;
//       });
//   },
//   getSeries(id: string) {
//     return axios
//       .get(`https://localhost:44372/api/series/${id}`)
//       .then(result => {
//         return result.data;
//       })
//       .catch(error => {
//         throw error;
//       });
//   }
// };

// export default SeriesService;

import request from "./request-service";

const getAllSeries = () => request(`https://localhost:44372/api/series`);
const getSeries = (id: string) =>
  request(`https://localhost:44372/api/series/${id}`);

export default { getAllSeries, getSeries };
