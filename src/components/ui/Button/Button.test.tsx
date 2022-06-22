import { beforeEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button test", () => {
  const handleClick = vi.fn();
  beforeEach(() => {
    render(
      <Button onClick={handleClick} type="submit">
        Add to cart
      </Button>
    );
  }),
    test("should show title all the time", () => {
      expect(screen.getByText(/Add to cart/i)).toBeDefined();
    });
  test("should the funcions been fired", () => {
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(/Add to cart/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
