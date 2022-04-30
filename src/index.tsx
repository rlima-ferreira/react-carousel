import React, { ReactFragment, useEffect, useRef, useState } from 'react';
import { Wrapper, Indicator } from './styles';

interface CarouselProps {
  h?: number;
  w?: number;
  source: Array<any>;
  getItem: Function;
  getIndicator?: Function;
  arrowLeftIcon?: ReactFragment;
  arrowRightIcon?: ReactFragment;
  // autoplay?: boolean;
  // delay?: number;
  iconColor?: string;
  bg?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  h,
  w,
  source,
  getItem,
  getIndicator,
  arrowLeftIcon,
  arrowRightIcon,
  // autoplay,
  // delay,
  iconColor,
  bg,
}) => {
  const [position, setPosition] = useState({
    current: 0,
    last: 0,
  });
  // const [timer] = useState(
  //   autoplay ? setInterval(toggleItem, delay || 3000) : 0
  // );
  const items = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const size = source.length - 1;
    const { current, last } = position;
    if (current <= size) {
      items.current?.scrollBy(items.current.offsetWidth * (current - last), 0);
    } else {
      items.current?.scrollBy(items.current.offsetWidth * -current, 0);
    }
    // return () => clearInterval(timer);
  }, [position]);

  function toggleItem(iterator: number = 1) {
    const size = source.length - 1;
    let current = position.current + iterator;
    if (iterator > 0) current = current <= size ? current : 0;
    else if (iterator < 0) current = current >= 0 ? current : size;
    setPosition({ last: position.current, current });
  }

  return (
    <Wrapper width={w} height={h} background={bg} color={iconColor}>
      <div ref={items} className="items">
        {source.map((item, index) => (
          <div key={index.toString()}>{getItem(item)}</div>
        ))}
      </div>
      <div className="arrows">
        <div>
          <button onClick={() => toggleItem(-1)}>
            {arrowLeftIcon || 'Back'}
          </button>
        </div>
        <div>
          <button onClick={() => toggleItem(1)}>
            {arrowRightIcon || 'Next'}
          </button>
        </div>
      </div>
      <div className="indicators">
        {[...new Array(source.length)].map((_, index) =>
          getIndicator ? (
            getIndicator({
              index,
              active: index === position.current,
              navigate: () =>
                setPosition({ last: position.current, current: index }),
            })
          ) : (
            <Indicator
              key={index.toString()}
              active={position.current == index}
              color={iconColor}
              onClick={() =>
                setPosition({ last: position.current, current: index })
              }
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Carousel;
