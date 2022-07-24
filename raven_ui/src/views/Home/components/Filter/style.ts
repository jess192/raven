import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const FilterSortStyle = styled.menu`
  all: unset;
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

export const FilterStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  
  @media screen and ${device.sizeM} {
    flex-direction: row;
    justify-content: center;
    row-gap: 20px;
    width: 100%;
  }
`;

export const FilterItemStyle = styled.li`
  margin-right: 20px;
  display: flex;
  align-items: center;
  
  ul {
    all: unset;
    display: flex;
    align-items: center;
    
    li {
      list-style: none;
      margin-right: 10px;
    }
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

export const ShowingItemsStyle = styled.li`
  margin-left: 20px;  
  display: flex;
  align-items: center;
  padding: 10px;

  @media screen and ${device.sizeL} {
    display: none;
  }
`;

export const SortStyle = styled.section`
  @media screen and ${device.sizeXS} {
    display: none;
  }
`;
