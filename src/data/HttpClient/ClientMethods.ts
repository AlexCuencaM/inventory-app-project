import { AxiosError, AxiosResponse } from "axios";
import { axiosClient } from "./AxiosClient";
import { initialUser } from "../../state/initialStates";

export const Get = async <T extends unknown>(
    endpoint: string,
    authorized: boolean = true,
    params?: object,
): Promise<T> => {
    const { Token } = initialUser;
    console.log(initialUser)
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
    const { Token } = initialUser;
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
    const { Token } = initialUser;
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
    const { Token } = initialUser;
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

