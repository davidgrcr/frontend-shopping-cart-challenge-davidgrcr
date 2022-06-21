import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button test", () => {
  test("should show title all the time", () => {
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick} type="submit">
        Add to cart
      </Button>
    );

    expect(screen.getByText(/Add to cart/i)).toBeDefined();

    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(/Add to cart/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
