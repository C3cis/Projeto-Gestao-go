// uma opção de select pode ser um texto simples ("Ativo")
// ou um par { label, valor } — mostra o nome, envia o id (usado em relações/FK)
export type OpcaoCampo = string | { label: string; valor: string | number }

export type Campo = {
  chave: string          // nome da propriedade no objeto (ex.: 'nome')
  label: string          // texto que aparece pro usuário (placeholder/opção)
  tipo: 'text' | 'date' | 'number' | 'select'
  opcoes?: OpcaoCampo[]  // só usado quando tipo === 'select'
}
