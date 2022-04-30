import React, { ReactFragment } from 'react';
interface CarouselProps {
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
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
