import { ReactNode } from "react";
import CarouselButton from "./CarouselButton";
import CarouselSlide, { CarouselSlideProps } from "./CarouselSlide";
import { useSlideIndex } from "./useSlideIndex";

type Slide = {
  imgUrl?: string;
  description?: ReactNode;
  attribution?: ReactNode;
};

type CarouselProps = {
  slides?: Slide[];
  slideIndex?: number;
  onSlideIndexChange?: (newSlideIndex: number) => void;
  autoAdvanceInterval?: number;
  DefaultImgComponent?: CarouselSlideProps["ImgComponent"];
  defaultImgHeight?: CarouselSlideProps["imgHeight"];
};

const Carousel = ({
  slides,
  slideIndex: slideIndexProp,
  onSlideIndexChange,
  autoAdvanceInterval,
  DefaultImgComponent,
  defaultImgHeight,
}: CarouselProps) => {
  const [slideIndex, decrementSlideIndex, incrementSlideIndex] = useSlideIndex(
    slides,
    slideIndexProp,
    onSlideIndexChange,
    autoAdvanceInterval
  );
  return (
    <div data-testid="carousel">
      <CarouselSlide
        ImgComponent={DefaultImgComponent}
        imgHeight={defaultImgHeight}
        {...slides?.[slideIndex]}
      />
      <CarouselButton data-testid="prev-button" onClick={decrementSlideIndex}>
        Prev
      </CarouselButton>
      <CarouselButton data-testid="next-button" onClick={incrementSlideIndex}>
        Next
      </CarouselButton>
    </div>
  );
};

export default Carousel;
