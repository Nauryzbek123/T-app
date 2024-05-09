import { message } from "antd";
import { SERVICE_URL } from "../../../config";
import { postRequest } from "../../../utils/request";
import { setAccessToken } from "../../../utils/token";

export const login = (
    body: any,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToken: React.Dispatch<React.SetStateAction<string | null>>
  ): void => {
    const hideLoadingMsg = message.loading("Авторизация", 0);
  
    const url = `${SERVICE_URL}/api/auth/login`;
  
    postRequest(url, body)
      .then((data) => {
        
  
        const accessToken = data.data?.access_token || "";
        setAccessToken(accessToken);
        setToken(accessToken);
  
  
      })
      .catch((err) => {
        const messageTxt = err?.response?.data?.message || "Неизвестная ошибка";
  
        message.error(messageTxt, 3);
      })
      .finally(() => {
        setIsLoading(false);
        hideLoadingMsg();
      });
  };
  
  export const registration = (body: any) => {
    console.log('body',body);
    const url = `${SERVICE_URL}/api/auth/register`;
    
  
    return postRequest(url, body);
  };
  