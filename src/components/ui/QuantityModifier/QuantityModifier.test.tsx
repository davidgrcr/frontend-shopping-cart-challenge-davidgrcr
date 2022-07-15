import { beforeEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import QuantityModifier from "./QuantityModifier";

const defaultProps = {
  onDecrement: vi.fn(),
  onIncrement: vi.fn(),
  onChange: vi.fn(),
  quantity: 1,
};

const setup = (props: any = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return render(<QuantityModifier {...setupProps} />);
};

describe("QuantityModifier test", () => {
  test("renders without error", () => {
    setup();
  });

  test("should the funcions been fired", () => {
    setup();
    expect(defaultProps.onDecrement).toHaveBeenCalledTimes(0);
    expect(defaultProps.onIncrement).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId("quantity-modifier-on_decrement"));
    expect(defaultProps.onDecrement).toHaveBeenCalledTimes(1);
    expect(defaultProps.onIncrement).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId("quantity-modifier-on_increment"));
    expect(defaultProps.onIncrement).toHaveBeenCalledTimes(1);
  });
});
