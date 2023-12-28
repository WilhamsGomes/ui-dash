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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InvoiceContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border: 1px solid ${(props) => props.theme.colors.baseFont4};
  padding: 20px;

  @media (${(props) => props.theme.breaks.sm}) {
    padding: 10px;
  }

  @media (${(props) => props.theme.breaks.sm}) {
    height: 100px;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 14px;
  }

  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.baseFont2};
  }

  @media (${(props) => props.theme.breaks.sm}) {
    p {
      font-size: 12px;
    }
  }
`;

export const ButtonDownload = styled.button`
  min-width: 180px;
  height: 30px;
  border: none;
  background: #69ff8f;
  font-weight: 600;

  @media (${(props) => props.theme.breaks.sm}) {
    min-width: 0;
    width: 50%;
  }
`;
