import axios from "axios";
import { getCsrfToken, getHeader } from "./headers";

export const getRequest = (url: string, options: object = {}) => {
    return axios
      .get(url, {
        headers: {
          ...getHeader(),
        },
        ...options,
      })
      .catch((err) => {
        if (err?.response?.status === 403) {
          localStorage.removeItem("access_token");
  
          window.location.reload();
        }
  
        throw err;
      });
  };

  
  export const postRequest = (
    url: string,
    body: any = {},
    options: object = {}
  ) => {
    console.log('headers',getHeader());
    return axios
      .post(url, body, {
        headers: {
          ...getHeader(),
          // 'X-CSRF-TOKEN': getCsrfToken(),
        },
        ...options,
      })
      .catch((err) => {
        if (err?.response?.status === 403) {
          localStorage.removeItem("access_token");
  
          window.location.reload();
        }
  
        throw err;
      });
  };
  
  export const patchRequest = (
    url: string,
    body: any = {},
    options: object = {}
  ) => {
    return axios
      .patch(url, body, {
        headers: {
          ...getHeader(),
        },
        ...options,
      })
      .catch((err) => {
        if (err?.response?.status === 403) {
          localStorage.removeItem("access_token");
  
          window.location.reload();
        }
  
        throw err;
      });
  };
  
  export const deleteRequest = (url: string, options: object = {}) => {
    return axios
      .delete(url, {
        headers: {
          ...getHeader(),
        },
        ...options,
      })
      .catch((err) => {
        if (err?.response?.status === 403) {
          localStorage.removeItem("access_token");
  
          window.location.reload();
        }
  
        throw err;
      });
  };
  