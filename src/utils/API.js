import axios from "axios";

// Export an object containing methods we'll use for accessing the Employee Directory App

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    getAllEmployees: function() {
      return axios.get(BASEURL);
    }
  };