export default function calculateCurrencyAmount(amount: number) {
  let formattedTotal = amount.toLocaleString("en-DE", {
    style: "currency",
    currency: "EUR",
  });

  return formattedTotal;
}
