import axios from "axios";

const ChaptersService = {
  getAllChapters() {
    return axios
      .get("https://localhost:44372/api/chapters")
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  },
  getChapters(id: string) {
    return axios
      .get(`https://localhost:44372/api/chapters/${id}`)
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  },
  getChaptersBySeries(id: string) {
    return axios
      .get(`https://localhost:44372/api/chapters/byseries/${id}`)
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  }
};

export default ChaptersService;
