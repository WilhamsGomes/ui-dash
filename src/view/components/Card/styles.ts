import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.baseFont4};

  h3 {
    font-size: 30px;
  }

  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.baseFont3};
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 14px;
  }

  svg {
    color: ${(props) => props.theme.colors.baseFont3};
  }
`;
