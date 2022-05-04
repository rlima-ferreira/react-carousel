import React, { ReactFragment, useEffect, useRef, useState } from 'react';
import useInterval from './hooks/useInterval';
import { Wrapper, Indicator } from './styles';

type Props = {
  h?: number;
  w?: number;
  source: Array<any>;
  getItem: Function;
  getIndicator?: Function;
  arrowLeftIcon?: ReactFragment;
  arrowRightIcon?: ReactFragment;
  autoplay?: boolean;
  delay?: number;
  iconColor?: string;
  bg?: string;
};

export default function Carousel({
  h,
  w,
  source,
  getItem,
  getIndicator,
  arrowLeftIcon,
  arrowRightIcon,
  autoplay,
  delay,
  iconColor,
  bg,
}: Props) {
  const [settings, setSettings] = useState({ current: 0, last: 0, autoplay });
  const items = useRef<HTMLDivElement>(null);
  const interval = 3000;

  useEffect(() => {
    const size = source.length - 1;
    const { current, last } = settings;
    if (current <= size) {
      items.current?.scrollBy(items.current.offsetWidth * (current - last), 0);
    } else {
      items.current?.scrollBy(items.current.offsetWidth * -current, 0);
    }
    const id = setTimeout(
      () => setSettings({ ...settings, autoplay }),
      delay || interval
    );
    return () => clearTimeout(id);
  }, [settings.current]);

  useInterval(
    () => {
      if (!autoplay) return;
      if (!settings.autoplay) return;
      const size = source.length - 1;
      let { current } = settings;
      current = current + 1 <= size ? current + 1 : 0;
      setSettings({ ...settings, last: settings.current, current });
    },
    delay || interval,
    !settings.autoplay
  );

  function toggleItem(iterator: number = 1) {
    const size = source.length - 1;
    let current = settings.current + iterator;
    if (iterator > 0) current = current <= size ? current : 0;
    else if (iterator < 0) current = current >= 0 ? current : size;
    setSettings({ last: settings.current, current, autoplay: false });
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
              active: index === settings.current,
              navigate: () =>
                setSettings({
                  ...settings,
                  last: settings.current,
                  current: index,
                }),
            })
          ) : (
            <Indicator
              key={index.toString()}
              active={settings.current == index}
              color={iconColor}
              onClick={() =>
                setSettings({
                  ...settings,
                  last: settings.current,
                  current: index,
                })
              }
            />
          )
        )}
      </div>
    </Wrapper>
  );
}
