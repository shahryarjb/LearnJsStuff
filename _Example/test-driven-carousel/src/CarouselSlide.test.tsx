import styled from "styled-components";
import { render, screen } from "@testing-library/react";
import CarouselSlide, { ScaledImg } from "./CarouselSlide";

describe("CarouselSlide", () => {
  it("passes `imgUrl` through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    render(<CarouselSlide imgUrl={imgUrl} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", imgUrl);
  });

  it("uses `description` and `attribution` as the caption", () => {
    const props = {
      description: "A jaw-droppingly spectacular image",
      attribution: "Trevor Burnham",
    };
    render(<CarouselSlide {...props} />);
    const figcaption = screen.getByTestId("caption");
    expect(figcaption).toHaveTextContent(
      `${props.description} ${props.attribution}`
    );
  });

  it("passes other props through to the <figure>", () => {
    const props = {
      className: "my-carousel-slide",
      "data-test-name": "My slide",
    };
    render(<CarouselSlide {...props} />);
    const figure = screen.getByRole("figure");
    expect(figure).toHaveClass(props.className);
    expect(figure).toHaveAttribute("data-test-name", props["data-test-name"]);
  });

  it("uses `imgHeight` as the height of the <img>", () => {
    render(<CarouselSlide imgHeight="123px" />);
    expect(screen.getByRole("img")).toHaveStyleRule("height", "123px");
  });

  it("allows styles to be overridden with `ImgComponent`", () => {
    const TestImg = styled(ScaledImg)`
      width: auto;
      object-fit: fill;
    `;
    render(<CarouselSlide ImgComponent={TestImg} imgHeight={250} />);
    expect(screen.getByRole("img")).toHaveStyleRule("width", "auto");
    expect(screen.getByRole("img")).toHaveStyleRule("height", "250px");
    expect(screen.getByRole("img")).toHaveStyleRule("object-fit", "fill");
  });

  it("matches snapshot", () => {
    render(<CarouselSlide />);
    expect(screen.getByRole("figure")).toMatchSnapshot();
  });
});
