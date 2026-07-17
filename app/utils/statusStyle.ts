import type { StatusEquipamento } from "~/types/equipamentos";
import type { StatusManutencao } from "~/types/manutencao";
import type { StatusPedido, StatusSensorPedido } from "~/types/pedidos";

export const sensorStyles: Record<StatusSensorPedido, string> = {
  Urgencia: 'border-rose-400 bg-rose-950/60 text-rose-300',
  Alerta: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Normal: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
}

export const pedidoStyles: Record<StatusPedido, string> = {
  Pendente: 'border-amber-400 bg-amber-950/60 text-amber-300',
  'Em Triagem': 'border-sky-400 bg-sky-950/60 text-sky-300',
  Concluido: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Cancelado: 'border-neutral-500 bg-neutral-800 text-neutral-400',
}

export const equipamentoStyles: Record<StatusEquipamento, string> = {
  Ativo: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Manutencao: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Inativo: 'border-neutral-500 bg-neutral-800 text-neutral-400',
}

export const manutencaoStyles: Record<StatusManutencao, string> = {
  Agendadas: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Concluidas: 'border-sky-400 bg-sky-950/60 text-sky-300',
  Canceladas: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Urgentes: 'border-neutral-500 bg-neutral-800 text-neutral-400',
  'Em Andamento': 'border-violet-400 bg-violet-950/60 text-violet-300',
}
