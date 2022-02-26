import axios, { Method } from "axios";

interface dataPropType {
  writer?: string;
  password?: string;
  title?: string;
  content?: string;
}

const BASE_URL = "http://13.209.58.38:8080/";

const Request = async (
  url: string,
  method: Method,
  data: dataPropType = {}
) => {
  return await axios
    .request({
      url: BASE_URL + url,
      method,
      data,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export default Request;
