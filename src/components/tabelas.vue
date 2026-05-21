<script setup>
defineProps({
  colunas: {
    type: Array,
    required: true
  },
  dados: {
    type: Array,
    required: true
  }
})
</script>
<template >
    <section class="tabela-container">
    <table class="tabela-geral">
        <thead>

            <tr>
                <th v-for="coluna in colunas" :key="coluna.chave">
                    {{ coluna.titulo }} 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in dados" :key="index">
            <td v-for="coluna in colunas" :key="coluna.chave">
                {{ item[coluna.chave] }}

            </td>
            </tr>
        </tbody>
    </table>
    </section>

</template>
<style lang="css">
.tabela-container {
    background-color: #f4f7fe;
    gap: 2px;
    padding: 10px;
    border-radius: 10px;
    width:100%;
    overflow-x: auto;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    background-color: white;
}

table th {
    background-color: #2d6cdf;
}

/* --- TÍTULOS: SEM LINHAS VERTICAIS --- */
thead th {
    padding: 15px 12px;
    text-align: left;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
}

/* --- CONTEÚDO: COM TODAS AS LINHAS VERTICAIS --- */
tbody td {
    padding: 15px 12px;
    color: #1b254b;
    font-size: 0.9rem;
    vertical-align: middle;
    border-bottom: 1px solid #f4f7fe; /* Linha horizontal mais suave */
    border-right: 1px solid #e9edf7;  /* Linha vertical interna */
}
/* Arredonda o canto superior esquerdo da primeira coluna */
thead th:first-child {
    border-radius: 10px 0 0 0;
}
/* Arredonda o canto superior direito da última coluna */
thead th:last-child {
    border-radius: 0 10px 0 0;
}
</style>