import React, { useState } from 'react';
import { useInsertProduct } from '@/api';
import { InsertProductStyle } from './style';

export default function InsertProduct() {
  const [url, setUrl] = useState('');
  const { reset, mutate, isLoading, isError, isSuccess } = useInsertProduct();

  const handleUrlInputChange = (event: { persist: () => void; target: { value: any; }; }) => {
    event.persist();
    reset();
    setUrl(() => (event.target.value));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    mutate(url);
  };

  const getStatus = (): string => {
    if (isLoading) {
      return 'Loading...';
    }
    if (isError) {
      return 'Error';
    }
    if (isSuccess) {
      if (url !== '') {
        setUrl('');
      }
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

          <button type="submit" disabled={isLoading}>
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
