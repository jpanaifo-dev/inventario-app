// Validaciones para inventario

export interface InventarioData {
  nombre: string
  cantidad: number
  precio: number
  [key: string]: unknown
}

export function validateInventario(data: InventarioData) {
  if (typeof data.nombre !== 'string' || data.nombre.trim() === '') {
    return false
  }
  if (typeof data.cantidad !== 'number' || data.cantidad < 0) {
    return false
  }
  if (typeof data.precio !== 'number' || data.precio < 0) {
    return false
  }
  return true
}
