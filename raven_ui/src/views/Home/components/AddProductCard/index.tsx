import React, { useEffect, useState } from 'react';
import { useInsertProduct } from '@/api';
import { QueryErrorType } from '@/views/Home/types';
import { useClickOutside } from '@/hooks/useClickOutside';
import Throbber from '@/components/Throbber';
import Button from '@/components/Button';
import InputBox from '@/components/InputBox';
import {
  AddProductCardStyle, AddProductCardFormStyle, AddProductCardTextStyle, AddProductCardSubtextStyle,
  AddProductCardStatusStyle, AddProductCardButtonWrapperStyle, AddProductCardLoadingStyle,
} from './style';

export default function AddProductCard() {
  const [url, setUrl] = useState('');
  const { mutate, reset, isLoading, isError, error, isSuccess } = useInsertProduct();
  const { ref } = useClickOutside(() => reset());

  useEffect(() => {
    if (isSuccess) {
      setUrl('');
    }
  }, [isSuccess]);

  const handleChange = (event: { target: { value: string; }; }): void => {
    setUrl(() => (event.target.value));
  };

  const handleSubmit = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    mutate(url);
  };

  const showStatus = () => {
    let statusMsg: string = '';
    let statusType: string = '';

    if (isError) {
      statusMsg = (error as QueryErrorType).response.data.detail;
      statusType = 'error';
    } else if (isSuccess) {
      statusMsg = 'Success! You have added a new product.';
      statusType = 'success';
    }
    return (
      <AddProductCardStatusStyle type={statusType}>
        {statusMsg}
      </AddProductCardStatusStyle>
    );
  };

  if (isLoading) {
    return (
      <AddProductCardLoadingStyle>
        <Throbber
          squareSize={50}
          thickness={5}
        />
      </AddProductCardLoadingStyle>
    );
  }

  return (
    <AddProductCardStyle>
      <AddProductCardFormStyle onSubmit={handleSubmit}>
        <AddProductCardTextStyle>
          enter an amazon url to start tracking prices
        </AddProductCardTextStyle>
        <AddProductCardSubtextStyle>
          raven will support other providers in the future
        </AddProductCardSubtextStyle>

        <InputBox
          type="text"
          placeholder="https://amazon.com/"
          value={url}
          onChange={handleChange}
          height={25}
          fontSize={16}
          title="enter an amazon product url"
        />

        {showStatus()}

        <AddProductCardButtonWrapperStyle>
          <Button _ref={ref} type="submit" disabled={isLoading || url === ''} title="add product">add product</Button>
        </AddProductCardButtonWrapperStyle>

      </AddProductCardFormStyle>
    </AddProductCardStyle>
  );
}
