import styled from '@emotion/styled';

export const SearchForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 20px 0;
  background: linear-gradient(rgba(125, 127, 239, 0.8), rgba(5, 5, 5, 0.6));
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px 5px 5px 15px;
  font-size: 18px;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font: inherit;
    color: #cccccc;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #efa51b;
    color: #fff;
  }
`;