import axios from "axios";
import { Item } from "../../../utils/interfaces";
import { getRequest } from "../../../utils/request";

export const fetchItems = (
    page: number,
    onSuccess?: (data: Item[],total: number) => void,
    onError?: () => void,
    onFinish?: () => void
  ) => {
    const url = `https://lost-and-found.kz/api/item?page=${page}`;
  
    axios.get(url)
        .then((response) => {
            if (onSuccess) {
                console.log("dd")
                const items = response.data.data;
                const total = response.data.meta.to;
                console.log('total',total)
                onSuccess(items,total);
                console.log('ee',response.data)
            }
        })
        .catch((error) => {
            console.error('Error fetching items:', error);
            if (onError) {
                console.log('bb')
                onError();
            }
        })
        .finally(() => {
            if (onFinish) {
                onFinish();
            }
        });
  };