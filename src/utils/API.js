import axios from "axios";

export default {
  createFactory: data => {
    let body = {
      name: data.name,
      children: data.children
    };
    return axios.post("http://localhost:3000/api/createFactory", body);
  },

  getFactory: () => axios.get("http://localhost:3000/api/getFactory"),

  deleteFactory: data => {
    let body = {
      id: data.id
    };
    axios.delete("http://localhost:3000/api/deleteFactory", body);
  },

  deleteAll: data => {
    axios.delete("http://localhost:3000/api/deleteAll");
  }
};
