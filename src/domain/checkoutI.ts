export interface Checkout {
    /**
     * Scans a product adding it to the current cart.
     * @param code The product identifier
     * @returns itself to allow function chaining
     */
    scan(code: string): this;
    /**
     * Returns the value of all cart products with the discounts applied.
     */
    total(): number;
  }