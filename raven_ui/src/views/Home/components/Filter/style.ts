import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const FilterSortStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 30px 1px;

  @media screen and ${device.sizeM} {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const FilterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media screen and ${device.sizeM} {
    flex-direction: row;
    justify-content: center;
    row-gap: 20px;
    width: 100%;
  }
`;

export const FilterItemStyle = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  
  li {
    all: unset;
    margin-right: 10px;
  }
`;

export const SearchFilterItemStyle = styled(FilterItemStyle)`
  @media screen and ${device.sizeM} {
    width: 100%;
  }
`;

export const PriceFilterItemStyle = styled(FilterItemStyle)`
  @media screen and ${device.sizeS} {
    display: none;
  }
`;

export const ShowingItemsStyle = styled.div`
  margin-left: 20px;  
  display: flex;
  align-items: center;
  font-style: italic;
  padding: 10px;

  @media screen and ${device.sizeL} {
    display: none;
  }
`;

export const SortStyle = styled.div`
  @media screen and ${device.sizeXS} {
    display: none;
  }
`;
