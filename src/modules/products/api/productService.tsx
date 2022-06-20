import ApiService, { ApiData } from 'src/api/ApiService';
import { METHOD } from 'src/api/constants';
import { ProductData, ProductPostData } from '../types';
class ProductService {
  private static getProductUrl() {
    return 'products';
  }

  public static async getAllProducts(): Promise<ApiData<ProductData[]>> {
    try {
      const response = await ApiService.request(
        {
          url: `${this.getProductUrl()}`,
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
          url: `${this.getProductUrl()}/${id}`,
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
          url: `${this.getProductUrl()}/${id}`,
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
          url: `${this.getProductUrl()}`,
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
          url: `${this.getProductUrl()}/${id}`,
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
