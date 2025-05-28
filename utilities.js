export function convert2Decimal(inputNumber) {
  const toNumber = parseFloat(inputNumber).toFixed(2);
  return toNumber;

  console.log(`UTILITIES: ${finalNumber.toFixed(2)}`);
  console.log(`UTILITIES: ${typeof finalNumber}`);
  //   console.log(`UTILITIES: ${formattedAmount}`);
}

export function formatCurrency(total) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(total);

  return formattedAmount;
}
