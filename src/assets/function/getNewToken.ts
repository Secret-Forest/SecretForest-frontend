import axios from "axios";

export const getNewToken = () => {
  axios
    .request({
      method: "put",
      url: "http://13.209.58.38:8080/admin/auth/reissue",
      data: {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
      },
    })
    .then((res) => {
      if (res.status === 201) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
      }
    })
    .catch((err) => console.log(err));
};
