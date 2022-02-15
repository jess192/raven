import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const API_URL: string = 'http://192.168.0.169:8090';

export const useProducts = () => useQuery('products', async () => {
  const getURL = API_URL.concat('/prices');
  const { data } = await axios.get(getURL);

  if (data.status === 'error') {
    throw new Error('something went wrong...');
  }

  // TODO - API should return list reversed
  data.product_prices = data.product_prices.reverse();
  return data;
});

export const useInsertProduct = () => {
  const queryClient = useQueryClient();
  const insertURL = API_URL.concat('/insert?url=');
  const insertProduct = (url: string) => axios.post(insertURL.concat(url));

  return useMutation(insertProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const deleteURL = API_URL.concat('?product_id=');
  const deleteProduct = (id: string) => axios.delete(deleteURL.concat(id));

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};
