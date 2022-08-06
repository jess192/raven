import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { ProductsEndpointType } from '@/api/types';

const API_URL: string = process.env.RAVEN_API_HOST.concat(':', process.env.RAVEN_API_PORT);

export const useProducts = () => useQuery<ProductsEndpointType, Error>('products', async () => {
  const { data } = await axios.get(`${API_URL}/products`);
  return data;
});

export const useInsertProduct = () => {
  const queryClient: QueryClient = useQueryClient();
  const insertProduct = (url: string) => axios.post(`${API_URL}/products?url=${url}`);

  return useMutation(insertProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient: QueryClient = useQueryClient();
  const deleteProduct = (id: string) => axios.delete(`${API_URL}/products?product_id=${id}`);

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};
