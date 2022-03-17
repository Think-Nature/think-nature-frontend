import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getLocalStorageValue } from '../utils/localstorage';

const baseUrl = process.env.REACT_APP_API_URL;

// The shape of the JSON response.data from API endpoints.
export interface ApiData<T = any> {
  data?: T;
  message: string;
}

// Type T refers to the type of the data in response.data
export type ApiResponse<T = any> = AxiosResponse<ApiData<T>>;

export default class ApiService {
  public static authTokenKey = 'accessToken';

  public static async request(requestConfig: AxiosRequestConfig, isAuth = false, contentType = 'application/json'): Promise<any> {
    const accessToken: string | null = getLocalStorageValue(this.authTokenKey) ?? null;

    if (isAuth && !accessToken) {
      return;
    }

    try {
      const config: AxiosRequestConfig = {
        ...requestConfig,
        baseURL: baseUrl,
        headers: {
          'x-auth-token': `${accessToken}`,
          'Content-Type': contentType,
          ...requestConfig.headers,
        },
      };

      const response: ApiResponse = await axios(config);
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
