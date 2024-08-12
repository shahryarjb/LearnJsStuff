import { render } from '@testing-library/react';
import fc from 'fast-check';
import { describe, it, expect } from 'vitest';
import TotalCostCalculator from './TotalCostCalculator';

describe('TotalCostCalculator Component', () => {
  it('calculates the total cost correctly based on price, tax rate, and tip', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.float({ min: 0, max: 10000 }), // Generate random prices between 0 and 10000
        fc.float({ min: 0, max: 100 }),   // Generate random tax rates between 0% and 100%
        fc.float({ min: 0, max: 500 }),   // Generate random tips between 0 and 500
        async (price, taxRate, tip) => {
          const { container } = render(<TotalCostCalculator price={price} taxRate={taxRate} tip={tip} />);

          const expectedTaxAmount = price * (taxRate / 100);
          const expectedTotalCost = price + expectedTaxAmount + tip;

          // Querying specifically within the container to avoid issues with multiple rendered elements
          const totalCostElement = container.querySelector('h2');
          expect(totalCostElement).toHaveTextContent(`Total Cost: $${expectedTotalCost.toFixed(2)}`);
        }
      ),
      { verbose: true }
    );
  });

  it('calculates the total cost correctly when no tip is provided', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.float({ min: 0, max: 10000 }), // Generate random prices between 0 and 10000
        fc.float({ min: 0, max: 100 }),   // Generate random tax rates between 0% and 100%
        async (price, taxRate) => {
          const { container } = render(<TotalCostCalculator price={price} taxRate={taxRate} />);

          const expectedTaxAmount = price * (taxRate / 100);
          const expectedTotalCost = price + expectedTaxAmount;

          // Querying specifically within the container to avoid issues with multiple rendered elements
          const totalCostElement = container.querySelector('h2');
          expect(totalCostElement).toHaveTextContent(`Total Cost: $${expectedTotalCost.toFixed(2)}`);
        }
      ),
      { verbose: true }
    );
  });
});
