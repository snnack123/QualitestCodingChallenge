import styled from "styled-components";

export const Slide = styled.div<{ cardwidth: number }>`
  float: left;
  width: ${({ cardwidth }) => `${cardwidth}px`};
  max-width: 100%;
`;

export const SlideImage = styled.h1`
  color: #000;
  text-align: center;
  font-size: 10em;
  max-width: 100%;
`;
