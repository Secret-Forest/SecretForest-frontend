import axios, { Method } from "axios";

interface dataPropType {
  writer?: string;
  title?: string;
  content?: string;

  password?: string;

  adminId?: string;
}

const BASE_URL = "http://13.209.58.38:8080/";

export const Request = async (
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
      return res;
    })
    .catch((err) => {
      return err;
    });
};

interface adminDataPropType {}

export const RequestWithToken = async (
  url: string,
  method: Method,
  data: adminDataPropType = {}
) => {
  return await axios
    .request({
      url: BASE_URL + url,
      method,
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
