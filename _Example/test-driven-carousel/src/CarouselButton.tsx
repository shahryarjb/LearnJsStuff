import { ComponentPropsWithRef } from "react";

const CarouselButton = (props: ComponentPropsWithRef<"button">) => (
  <button {...props} /> //(1)
);

export default CarouselButton;
