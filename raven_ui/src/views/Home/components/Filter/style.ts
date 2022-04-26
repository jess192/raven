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
    all: unset;
    margin-right: 10px;
  }
`;

export const FilterResetButtonStyle = styled.button`
  all: unset;
  cursor: default;
  padding: 5px;
  transition: .4s;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgSecondaryColor};

  :disabled {
    background-color: #cccccc;
  }
  
  :hover :not(:disabled), :focus :not(:disabled) {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

export const ShowingItemsStyle = styled.div`
  margin-left: 20px;  
  display: flex;
  align-items: center;
  font-style: italic;
  padding: 10px;
`;

export const SortStyle = styled.div`
`;
