import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${(props) => props.theme.breaks.sm}) {
    padding: 10px;
  }
`;

export const HeaderFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    min-width: 280px;
    height: 40px;
    border: none;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.baseFont4};
    background: transparent;
    padding-left: 10px;
    color: ${(props) => props.theme.colors.baseFont1};

    &::placeholder {
      color: ${(props) => props.theme.colors.baseFont1};
    }
  }

  @media (${(props) => props.theme.breaks.md}) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;
  }

  @media (${(props) => props.theme.breaks.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.baseFont1};

    select {
      background: #69ff8f;
      border: none;
      height: 30px;
      border-radius: 5px;
      font-weight: 600;
      margin-left: -10px;
    }
  }
  
  @media (${(props) => props.theme.breaks.md}) {
    width: 100%;
    gap: 20px;
    align-items: flex-end;
    justify-content: space-between;
  }

  @media (${(props) => props.theme.breaks.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ActionsFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    min-width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
  }

  button:nth-child(2) {
    background: #69ff8f;
  }

  button:nth-child(1) {
    background: transparent;
    color: #fff;
  }
`;

export const RowCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (${(props) => props.theme.breaks.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${(props) => props.theme.breaks.sm}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RowChart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (${(props) => props.theme.breaks.lg}) {
    flex-direction: column;
  }
`;

export const BoxChart = styled.div`
  max-width: 100%;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.baseFont4};
  padding: 20px;
  border-radius: 10px;
`;
