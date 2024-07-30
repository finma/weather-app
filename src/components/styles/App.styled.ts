import styled from "styled-components";

const AppStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.wheater.clear.color1};
  background: linear-gradient(
    207deg,
    ${({ theme }) => theme.wheater.clear.color1} 0%,
    ${({ theme }) => theme.wheater.clear.color2} 100%
  );
`;

export default AppStyled;
