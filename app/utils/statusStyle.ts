import type { StatusEquipamento } from "~/types/equipamentos";
import type { StatusManutencao } from "~/types/manutencao";
import type { StatusFuncionario, CargoFuncionario} from "~/types/funcionarios"
import type { StatusPedido, StatusSensorPedido } from "~/types/pedidos";

export const sensorStyles: Record<StatusSensorPedido, string> = {
  Urgencia: 'border-rose-400 bg-rose-950/60 text-rose-300',
  Alerta: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Normal: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
}

export const pedidoStyles: Record<StatusPedido, string> = {
  Pendente: 'border-indigo-400 bg-indigo-950/60 text-indigo-300',
  'Em Triagem': 'border-fuchsia-400 bg-fuchsia-950/60 text-fuchsia-300',
  Concluido: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Cancelado: 'border-neutral-500 bg-neutral-800 text-neutral-400',
}

export const equipamentoStyles: Record<StatusEquipamento, string> = {
  Ativo: 'border-rose-400 bg-rose-950/60 text-rose-300',
  Manutencao: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Inativo: 'border-neutral-500 bg-neutral-800 text-neutral-400',
}

export const funcionariosStyles: Record<StatusFuncionario, string> = {
  Ativo: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Suspenso: 'border-amber-400 bg-amber-950/60 text-amber-300',
  'Nas Ferias': 'border-amber-400 bg-amber-950/60 text-amber-300',
  Inativo: 'border-neutral-500 bg-neutral-800 text-neutral-400',
}
export const funcionariosCargoStyles: Record<CargoFuncionario, string> = {
  Administrador: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  'Tecnico de Desenvolvimento': 'border-amber-400 bg-amber-950/60 text-amber-300',
  Coordenador: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Gerente: 'border-neutral-500 bg-neutral-800 text-neutral-400',
  Estagiario: 'border-neutral-500 bg-neutral-800 text-neutral-400',
  Suporte: 'border-sky-400 bg-sky-950/60 text-sky-300',
}


export const manutencaoStyles: Record<StatusManutencao, string> = {
  Agendadas: 'border-rose-400 bg-rose-950/60 text-rose-300',
  Concluidas: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Canceladas: 'border-neutral-400 bg-neutral-800/30 text-neutral-400',
  Urgentes: 'border-rose-400 bg-rose-950/60 text-rose-300',
  'Em Andamento': 'border-amber-400 bg-amber-950/60 text-amber-300',
}

export const badgeStyles: Record<'urgente' | 'alerta' | 'normal', string> = {
  urgente: 'border-l-red-500',
  alerta: 'border-l-amber-400',
  normal: 'border-l-emerald-400'
}