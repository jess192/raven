import React, { useState } from 'react';
import { useInsertProduct } from '@/api';
import Throbber from '@/components/Throbber';
import Button from '@/components/Button';
import InputBox from '@/components/InputBox';
import { QueryErrorType } from '@/views/Home/types';
import { InsertCardBackPropsType } from './types';
import {
  InsertCardBackButtonsStyle,
  InsertCardBackFormStyle,
  InsertCardBackStatusStyle,
  InsertCardBackStyle,
  InsertCardBackTextStyle,
} from './style';

export default function InsertCardBack(props: InsertCardBackPropsType) {
  const { setExpand } = props;
  const [url, setUrl] = useState('');
  const { mutate, isLoading, isError, error, isSuccess } = useInsertProduct();

  const handleChange = (event: { target: { value: string; }; }): void => {
    setUrl(() => (event.target.value));
  };

  const handleSubmit = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    mutate(url);
  };

  const closeExpand = (): void => {
    setExpand(false);
  };

  if (isLoading) {
    return (
      <InsertCardBackStatusStyle>
        <Throbber
          squareSize={50}
          thickness={5}
        />
      </InsertCardBackStatusStyle>
    );
  }
  if (isError) {
    return (
      <InsertCardBackStatusStyle>
        {(error as QueryErrorType).response.data.detail}
        <Button type="button" onClick={closeExpand}>Ok</Button>
      </InsertCardBackStatusStyle>
    );
  }
  if (isSuccess) {
    return (
      <InsertCardBackStatusStyle>
        Success! You have just added that product.
        <Button type="button" onClick={closeExpand}>Ok</Button>
      </InsertCardBackStatusStyle>
    );
  }

  return (
    <InsertCardBackStyle>
      <InsertCardBackFormStyle onSubmit={handleSubmit}>
        <InsertCardBackTextStyle>
          Enter an Amazon URL to start tracking prices. <br />
          Raven will support other providers in the future.
        </InsertCardBackTextStyle>

        <InputBox
          type="text"
          placeholder="https://amazon.com/"
          value={url}
          onChange={handleChange}
          width={550}
          height={50}
          fontSize={22}
        />

        <InsertCardBackButtonsStyle>
          <Button type="button" onClick={closeExpand}>Cancel</Button>
          <Button type="submit" disabled={isLoading}>Add Product</Button>
        </InsertCardBackButtonsStyle>

      </InsertCardBackFormStyle>
    </InsertCardBackStyle>
  );
}
