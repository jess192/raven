import React, { useEffect, useState } from 'react';
import { useInsertProduct } from '@/api';
import Throbber from '@/components/Throbber';
import Button from '@/components/Button';
import InputBox from '@/components/InputBox';
import { QueryErrorType } from '@/views/Home/types';
import { InsertCardBackPropsType } from './types';
import {
  InsertCardBackButtonsStyle,
  InsertCardBackFormStyle, InsertCardBackStatusStyle,
  InsertCardBackLoadingStyle,
  InsertCardBackStyle,
  InsertCardBackTextStyle, SubTextStyle,
} from './style';

export default function InsertCardBack(props: InsertCardBackPropsType) {
  const { expand, setExpand } = props;
  const [url, setUrl] = useState('');
  const [transition, setTransition] = useState(true);
  const { mutate, reset, isLoading, isError, error, isSuccess } = useInsertProduct();

  useEffect(() => {
    if (expand) {
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
      }, 400);
    } else {
      setTransition(true);
      reset();
      setUrl('');
    }
  }, [expand]);

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

  const closeExpand = (): void => {
    setExpand(false);
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
      <InsertCardBackStatusStyle type={statusType}>
        {statusMsg}
      </InsertCardBackStatusStyle>
    );
  };

  if (isLoading || transition) {
    return (
      <InsertCardBackLoadingStyle>
        <Throbber
          squareSize={50}
          thickness={5}
        />
      </InsertCardBackLoadingStyle>
    );
  }

  return (
    <InsertCardBackStyle>
      <InsertCardBackFormStyle onSubmit={handleSubmit}>
        <InsertCardBackTextStyle>
          enter an amazon url to start tracking prices
        </InsertCardBackTextStyle>
        <SubTextStyle>raven will support other providers in the future</SubTextStyle>

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

        <InsertCardBackButtonsStyle>
          <Button type="button" onClick={closeExpand} title="cancel">cancel</Button>
          <Button type="submit" disabled={isLoading || url === ''} title="add product">add product</Button>
        </InsertCardBackButtonsStyle>

      </InsertCardBackFormStyle>
    </InsertCardBackStyle>
  );
}
