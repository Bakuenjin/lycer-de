export function subtractTaxes(total, tax) {
    return (total / (100 + tax) * 100).toFixed(2)
}