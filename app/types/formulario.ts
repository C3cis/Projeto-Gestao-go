// uma opção de select pode ser um texto simples ("Ativo")
// ou um par { label, valor } — mostra o nome, envia o id (usado em relações/FK)
export type OpcaoCampo = string | { label: string; valor: string | number }

// nome da propriedade no objeto
// texto que aparece pro usuário as opções
// só usado quando tipo === 'select'
// 'metade' = 2 campos por linha Cargo/Status padrão = linha inteira
export interface Campo {
  chave: string 
  label: string 
  tipo: 'text' | 'date' | 'number' | 'select'
  opcoes?: OpcaoCampo[] 
  largura?: 'metade' 
}
