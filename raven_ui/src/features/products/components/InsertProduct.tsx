import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import axios from 'axios';
import { InsertProductStyle } from './style';

export function InsertProduct() {
  const { dispatch } = useContext(GlobalContext);

  const [url, setUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(null);

  const resetStatus = () => {
    setError(null);
    setSubmitted(null);
    setIsLoaded(true);
  };

  const handleUrlInputChange = (event: { persist: () => void; target: { value: any; }; }) => {
    event.persist();
    resetStatus();
    setUrl(() => (event.target.value));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    resetStatus();

    e.preventDefault();
    setIsLoaded(false);

    const POST_URL: string = 'http://192.168.0.169:8090/insert?url='.concat(url);

    axios.post(POST_URL)
      .then((response: any) => {
        if (response.data.status === 'SUCCESS') {
          setIsLoaded(true);
          setSubmitted(url);
          dispatch({ type: 'SET_INSERT_PRODUCT_NEW' });
        } else {
          throw new Error('not successful');
        }
      })
      .catch((err: any) => {
        // TODO - have API send message if Amazon thinks you're a bot
        setError(err.message);
      })
      .then(() => {
        setIsLoaded(true);
        setUrl('');
      });
  };

  const getStatus = (): string => {
    if (!isLoaded) {
      return 'Loading...';
    }
    if (error) {
      return 'Error: '.concat(error);
    }
    if (submitted) {
      return 'Success! You have just added that product.';
    }
    return '';
  };

  return (
    <InsertProductStyle>
      <div id="insert-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={handleUrlInputChange}
          />

          <button type="submit" disabled={!isLoaded}>
            Add Product
          </button>
        </form>

        <div id="insert-product-status">
          {getStatus()}
        </div>
      </div>
    </InsertProductStyle>
  );
}
