// Helper para calcular stock
// Helper para calcular stock sin usar 'any'.
// Se asume que los items tienen al menos la propiedad 'cantidad: number'.
export interface StockItem {
  cantidad: number;
  // Puedes agregar más propiedades según tu modelo
}

export function calculateStock(items: StockItem[]): number {
  return items.reduce((acc, item) => acc + item.cantidad, 0);
}
