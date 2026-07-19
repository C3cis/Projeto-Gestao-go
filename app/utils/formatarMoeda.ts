// formata um número como moeda brasileira: 1500 -> "R$ 1.500,00"
export function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
