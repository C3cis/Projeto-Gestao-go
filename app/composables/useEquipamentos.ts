import type { Equipamento } from '~/types/equipamentos';

export function useEquipamentos() {
  const equipamentos = ref<Equipamento[]>([]); //listagem dos equipamentos
  const error = ref(false);

  async function buscarEquipamentos() {
    const config = useRuntimeConfig();
    const dados = await $fetch<Equipamento[]>(`${config.public.apiBase}/api/equipamentos`);
    equipamentos.value = dados;

  } 
  
  const TotalEquipamentos = computed (() => equipamentos.value.length);

  const EquipamentosOperacionais = computed (() =>  
    equipamentos.value.filter(equipamento => equipamento.status === 'Ativo').length);

  const EquipamentosManutencao = computed (() =>  
    equipamentos.value.filter(equipamento => equipamento.status === 'Manutencao').length);

  const EquipamentosInativos = computed (() =>  
    equipamentos.value.filter(equipamento => equipamento.status === 'Inativo').length);


  return { equipamentos, buscarEquipamentos, TotalEquipamentos, EquipamentosOperacionais, EquipamentosManutencao, EquipamentosInativos, error};
}
