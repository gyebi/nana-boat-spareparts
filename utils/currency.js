export function formatGhs(value) {
  return new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS", minimumFractionDigits: 2 }).format(value);
}
