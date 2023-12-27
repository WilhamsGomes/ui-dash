import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.baseFont4};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 16px;
  font-weight: 550;
  color: ${(props) => props.theme.colors.baseFont2};

  li {
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${(props) => props.theme.colors.baseFont1};
    }
  }

  span {
    background: ${(props) => props.theme.colors.baseFont3};
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .active {
    color: ${(props) => props.theme.colors.baseFont1};
  }
`;

export const IconProfile = styled.span`
  background: #69ff8f;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
