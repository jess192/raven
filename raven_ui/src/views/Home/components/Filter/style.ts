import styled from 'styled-components';

export const FilterSortStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-top: 20px;
`;

export const FilterStyle = styled.div`
  display: flex;
`;

export const FilterItemStyle = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;

  li {
    all: unset; //tmp
    margin-right: 10px;
  }
`;

export const FilterResetButtonStyle = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid black;
  padding: 5px;
  
  &:hover {
    background-color: #ffd198;
  }
`;

export const ShowingItemsStyle = styled.div`
  margin-left: 20px;  
  display: flex;
  align-items: center;
  background-color: #efefef;
  padding: 10px;
`;

export const SortStyle = styled.div`
`;
