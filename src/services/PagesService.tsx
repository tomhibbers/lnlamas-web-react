import axios from "axios";

const PagesService = {
  getAllPages() {
    return axios
      .get("https://localhost:44372/api/pages")
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  },
  getPages(id: string) {
    return axios
      .get(`https://localhost:44372/api/pages/${id}`)
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  },
  getPagesByChapter(id: string) {
    return axios
      .get(`https://localhost:44372/api/pages/bychapter/${id}`)
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  }
};

export default PagesService;
