const FormattedPrice = ({ amount }: { amount?: number }) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <>{formattedAmount}</>;
};

export default FormattedPrice;
