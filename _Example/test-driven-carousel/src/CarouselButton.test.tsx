import { render, screen } from "@testing-library/react";
import CarouselButton from "./CarouselButton";

describe("CarouselButton", () => {
  it("renders a <button>", () => {
    render(<CarouselButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("passes `children` through to the <button>", () => {
    const text = "Button text";
    render(<CarouselButton>{text}</CarouselButton>);
    expect(screen.getByRole("button")).toHaveTextContent("Button text");
  });

  it("passes other props through to the <button>", () => {
    const className = "my-carousel-button";
    const dataAction = "prev";
    render(
      <CarouselButton className={className} data-action={dataAction}>
        Button text
      </CarouselButton>
    );
    expect(screen.getByRole("button")).toHaveClass(className);
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-action",
      dataAction
    );
  });
});
