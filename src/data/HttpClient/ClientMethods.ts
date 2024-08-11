import { AxiosError, AxiosResponse } from "axios";
import { axiosClient } from "./AxiosClient";
import { baseStorage } from "../../services/baseStorage";
import { UserState } from "../Entities/UserLogin";
const {GetData} = baseStorage()
export const { Token } = GetData<UserState>("user");
export const Get = async <T extends unknown>(
    endpoint: string,
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    if (authorized) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${Token}`;
            return config;
        });
    }
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
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    if (authorized) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${Token}`;
            return config;
        });
    }
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
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    if (authorized) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${Token}`;
            return config;
        });
    }
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
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    if (authorized) {
        axiosClient.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${Token}`;
            return config;
        });
    }
    return await axiosClient.delete(endpoint + `${id}`, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.error(JSON.stringify(error, null, 3));
            throw error;
        })
};

