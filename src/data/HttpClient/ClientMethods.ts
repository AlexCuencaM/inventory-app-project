import { AxiosError, AxiosResponse } from "axios";
import { axiosClient } from "./AxiosClient";

export const Get = async <T extends unknown>(
    endpoint: string,
    params?: object,
): Promise<T> => {
   
    return await axiosClient.get(endpoint, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
};

export const Post = async <T extends unknown>(
    endpoint: string,
    data?: object,
    params?: object,
): Promise<T> => {
    return await axiosClient.post(endpoint, data, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.log(JSON.stringify(error, null, 3));
            throw error;
        })
        
};

export const Put = async <T extends unknown>(
    endpoint: string,
    data?: object,
    params?: object,
): Promise<T> => {

    return await axiosClient.put(endpoint, data, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
        
};

export const Delete = async <T extends unknown>(
    endpoint: string,
    id: string | number,
    params?: object,
): Promise<T> => {
    return await axiosClient.delete(endpoint + `${id}`, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
};
