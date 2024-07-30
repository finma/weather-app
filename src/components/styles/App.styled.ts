import styled from "styled-components";

interface AppStyledProps {
  bg: string;
}

const AppStyled = styled.div<AppStyledProps>`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme, bg }) => theme.wheater[bg].color1};
  background: linear-gradient(
    207deg,
    ${({ theme, bg }) => theme.wheater[bg].color1} 0%,
    ${({ theme, bg }) => theme.wheater[bg].color2} 100%
  );
`;

export default AppStyled;
