import ApiService, { ApiData } from 'src/api/ApiService';
import { METHOD } from 'src/api/constants';
import { ProductData, ProductPostData } from '../types';

const url = 'products';
class ProductService {
  public static async getAllProducts(): Promise<ApiData<ProductData[]>> {
    try {
      const response = await ApiService.request(
        {
          url: url,
          method: METHOD.GET,
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getOneProduct(id: number): Promise<ApiData<ProductData>> {
    try {
      const response = await ApiService.request(
        {
          url: `${url}/${id}`,
          method: METHOD.GET,
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async updateOneProduct(id: number, ProductEditData: ProductPostData): Promise<ApiData<ProductData>> {
    try {
      const response = await ApiService.request(
        {
          url: `${url}/${id}`,
          method: METHOD.PUT,
          data: {
            ...ProductEditData,
          },
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async createOneProduct(ProductPostData: ProductPostData): Promise<ApiData<ProductData>> {
    try {
      const response = await ApiService.request(
        {
          url: `${url}`,
          method: METHOD.POST,
          data: {
            ...ProductPostData,
          },
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async deleteOneProduct(id: number): Promise<ApiData> {
    try {
      const response = await ApiService.request(
        {
          url: `${url}/${id}`,
          method: METHOD.DELETE,
        },
        true,
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ProductService;
