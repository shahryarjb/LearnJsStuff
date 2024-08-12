
interface TotalCostCalculatorProps {
  price: number;
  taxRate: number;
  tip?: number;
}

const TotalCostCalculator: React.FC<TotalCostCalculatorProps> = ({ price, taxRate, tip = 0 }) => {
  const taxAmount = price * (taxRate / 100);
  const totalCost = price + taxAmount + tip;

  return (
    <div>
      <h1>Total Cost Calculator</h1>
      <div>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Tax ({taxRate}%): ${taxAmount.toFixed(2)}</p>
        <p>Tip: ${tip.toFixed(2)}</p>
        <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default TotalCostCalculator;
