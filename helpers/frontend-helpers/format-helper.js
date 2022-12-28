const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export function getCurrencyFormat(number) {
  return currencyFormatter.format(number);
}
