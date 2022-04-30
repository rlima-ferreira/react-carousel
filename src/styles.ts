import styled from 'styled-components';

export const Wrapper = styled.div<{
  height?: number;
  width?: number;
  background?: string;
  color?: string;
}>`
  width: ${({ width }) => width || '100vw'};
  background-color: ${({ background }) => background || '#444'};
  overflow: hidden;
  position: relative;

  > div.items {
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      flex: none;
      width: 100%;
      height: ${({ height }) => height || '500px'};
      scroll-snap-align: start;
    }
  }

  > div.arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > div {
      position: absolute;
      top: calc(50% - 85px);
      left: 5%;

      &:last-of-type {
        left: inherit;
        right: 5%;
      }

      > button {
        color: ${({ color }) => color || '#fff'};
        cursor: pointer;
        height: 70px;
        width: 70px;
        background-color: transparent;
        border: none;
        outline: none;
      }
    }
  }

  > div.indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
  }
`;

export const Indicator = styled.button<{ active: boolean; color?: string }>`
  border-radius: 100%;
  height: 10px;
  width: 10px;
  border: 0;
  margin-left: 10px;
  background-color: ${({ active, color }) =>
    active ? color || '#fff' : 'rgba(0, 0, 0, 0.3)'};
  outline: none;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }
`;
