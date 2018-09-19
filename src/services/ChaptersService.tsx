import request from "./request-service";

const getAllChapters = () => request(`https://localhost:44372/api/chapters`);
const getChapters = (id: string) =>
  request(`https://localhost:44372/api/chapters/${id}`);
const getChaptersBySeries = (id: string) =>
  request(`https://localhost:44372/api/chapters/byseries/${id}`);

export default { getAllChapters, getChapters, getChaptersBySeries };
