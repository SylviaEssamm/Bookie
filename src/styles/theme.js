import styled from "styled-components";

export default {
  containerWidth: "1160px"
};

export const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.containerWidth};
  align-content: center;

  @media (max-width: 1160px) {
    padding: 0px 30px;
  }
`;
