import React from 'react';
import { useDeleteProduct } from '@/api';
import Button from '@/components/Button';
import Throbber from '@/components/Throbber';
import { ProductCardBackPropsType } from './types';
import {
  ProductDeleteCardStyle, ProductDeleteLoadingStyle, ProductDeletePromptStyle,
  DeleteCardTextStyle, DeleteCardButtonsStyle, DeleteCardHeadTextStyle,
} from './style';

export default function ProductCardBack(props: ProductCardBackPropsType) {
  const { productID, setFlip } = props;
  const { mutate, reset, isLoading, isSuccess, isError } = useDeleteProduct();

  const closeCard = ():void => {
    setFlip(false);
    reset();
  };

  const deleteProduct = ():void => {
    mutate(productID);
  };

  if (isError) {
    return (
      <ProductDeleteCardStyle>
        Error
        <Button type="button" onClick={closeCard}>
          Ok
        </Button>
      </ProductDeleteCardStyle>
    );
  }

  return (
    <ProductDeleteCardStyle>
      <ProductDeleteLoadingStyle isLoading={isLoading || isSuccess}>
        <Throbber
          squareSize={50}
          thickness={5}
        />
      </ProductDeleteLoadingStyle>

      <ProductDeletePromptStyle isLoading={isLoading || isSuccess}>
        <DeleteCardHeadTextStyle>
          deleting...
        </DeleteCardHeadTextStyle>
        <DeleteCardTextStyle>
          are you sure you want to stop tracking this product?
        </DeleteCardTextStyle>

        <DeleteCardButtonsStyle>
          <Button type="button" onClick={closeCard} title="cancel">cancel</Button>
          <Button type="button" onClick={deleteProduct} title="delete">yes, delete</Button>
        </DeleteCardButtonsStyle>
      </ProductDeletePromptStyle>
    </ProductDeleteCardStyle>
  );
}
