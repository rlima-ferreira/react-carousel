import React, { ReactFragment, useEffect, useState } from 'react';
import { Wrapper, Indicator } from './styled';

interface CarouselProps {
  h: number;
  w: number;
  source: Array<any>;
  getSlide: Function;
  getIndicator?: Function;
  arrowLeftIcon?: ReactFragment;
  arrowRightIcon?: ReactFragment;
  autoplay: boolean;
  delay: number;
  iconColor: string;
  bg: string;
}

const Carousel: React.FC<CarouselProps> = ({
  h,
  w,
  source,
  getSlide,
  getIndicator,
  arrowLeftIcon,
  arrowRightIcon,
  autoplay,
  delay,
  iconColor,
  bg,
}) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => toggleSlide(1), delay);
    return () => clearTimeout(timer);
  }, [autoplay]);

  function toggleSlide(iterator: number) {
    let pos = 0;
    if (iterator > 0) {
      pos = selected + iterator < source.length ? selected + iterator : 0;
    } else if (iterator < 0) {
      pos = selected + iterator >= 0 ? selected + iterator : source.length - 1;
    }
    setSelected(pos);
  }

  return (
    <Wrapper width={w} height={h} background={bg} color={iconColor}>
      <div
        className="items"
        onWheel={(e) => toggleSlide(e.deltaY > 0 ? -1 : 1)}
      >
        {source.map((item, index) => (
          <div key={index.toString()}>{getSlide(item)}</div>
        ))}
      </div>
      <div className="arrows">
        <div>
          <button onClick={() => toggleSlide(-1)}>
            {arrowLeftIcon || 'Previous'}
          </button>
        </div>
        <div>
          <button onClick={() => toggleSlide(1)}>
            {arrowRightIcon || 'Next'}
          </button>
        </div>
      </div>
      <div className="indicators">
        {new Array(source.length).map((_, index) =>
          getIndicator ? (
            getIndicator({
              index,
              active: index === selected,
              navigate: () => setSelected(index),
            })
          ) : (
            <Indicator
              key={index.toString()}
              active={selected == index}
              onClick={() => setSelected(index)}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Carousel;
