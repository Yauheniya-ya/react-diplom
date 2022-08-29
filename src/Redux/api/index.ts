import { create } from "apisauce";

const API = create({ baseURL: "https://api.itbook.store/1.0/" });

const getAllBooksApi = () => {
  return API.get("/new");
};

const getSelectedBookApi = (isbn13: string) => {
  return API.get(`/books/${isbn13}`);
};
const getSearchBookApi = () => {
  return API.any({ method: 'GET', url: '/search', params: {total : 12 }});
};

export { getAllBooksApi, getSelectedBookApi,getSearchBookApi };