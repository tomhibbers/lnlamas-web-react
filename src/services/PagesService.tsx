import request from "./request-service";

const getAllPages = () => request(`https://localhost:44372/api/pages`);
const getPages = (id: string) =>
  request(`https://localhost:44372/api/pages/${id}`);
const getPagesByChapter = (id: string) =>
  request(`https://localhost:44372/api/pages/bychapter/${id}`);

export default { getAllPages, getPages, getPagesByChapter };
