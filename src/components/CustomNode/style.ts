import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 120px;
  background-color: ${({ theme }) => theme.SECONDARY};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  height: 98px;
  border-radius: 5px;
  margin: 1px;

  display: grid;
  place-items: center;
  p {
    margin-bottom: 6px;
  }
`;

export const Styles = {
  Container,
  Content,
};
