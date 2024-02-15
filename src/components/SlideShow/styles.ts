import styled, { css, keyframes } from 'styled-components';

const slideAnimation = (cardWidth: number, totalCards: number) => keyframes`
  0%, 100% { transform: translateX(0); }
  ${Array.from({ length: totalCards }, (_, index) => `
    ${index * (100 / totalCards)}%, ${(index + 1) * (100 / totalCards)}% { transform: translateX(-${index * cardWidth}px); }
  `).join('\n')}
`;

export const SlideWrapper = styled.div<{ ispaused: string, cardwidth: number, totalcards: number }>`
  width: ${({ cardwidth, totalcards }) => `calc(${cardwidth}px * ${totalcards})`};
  animation: ${({ cardwidth, totalcards }) => css`${slideAnimation(cardwidth, totalcards)} 18s ease infinite`};
  animation-play-state: ${({ ispaused }) => (ispaused === 'true' ? 'paused' : 'running')};
`;

export const SlideshowContainer = styled.div`
  text-align: center;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;