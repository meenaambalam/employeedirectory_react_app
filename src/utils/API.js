import axios from "axios";

// API that gets Employee information for the Employee Directory App

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    getAllEmployees: function() {
      return axios.get(BASEURL);
    }
  };