export type Campo = {
  chave: string        // nome da propriedade no objeto (ex.: 'nome')
  label: string        // texto que aparece pro usuário (placeholder/opção)
  tipo: 'text' | 'date' | 'number' | 'select'
  opcoes?: string[]    // só usado quando tipo === 'select'
}
