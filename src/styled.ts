import styled from 'styled-components';

export const Wrapper = styled.div<{
  height: number;
  width: number;
  background: string;
  color: string;
}>`
  position: relative;
  width: ${({ width }) => `${width}px` || '100vw'};
  background-color: ${({ background }) => background || '#444'};
  overflow: hidden;

  > div.items {
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &:-webkit-scrollbar {
      display: none;
    }

    > div {
      flex: none;
      width: 100%;
      height: ${({ height }) => `${height}px` || '500px'};
      scroll-snap-align: start;
      pointer-events: none;
    }
  }

  > div.arrows {
    display: flex;
    justify-content: space-around;
    align-items: center;

    > button {
      color: ${({ color }) => color || '#fff'};
      cursor: pointer;
    }
  }

  > div.indicators {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background-color: ${({ color }) => color || '#fff'};
      cursor: pointer;
    }
  }
`;

export const Indicator = styled.button<{ active: boolean }>`
  border-radius: 100%;
  height: 20px;
  width: 20px;
  border: none;
  margin-left: 10px;
  background-color: ${({ active }) => !active && 'rgba(0, 0, 0, 0.3)'};

  &:first-of-type {
    margin-left: 0;
  }
`;
