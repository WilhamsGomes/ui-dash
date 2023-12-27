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
