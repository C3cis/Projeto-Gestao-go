<script setup>
</script>
<template>
<main class="main-container">
            <header class="cabecalho">
                <div class="titulo-header">
                    <h1>Meu Painel</h1>
                    <p>Atividades Realizadas</p>
                </div>
                <div class="perfil-usuario">
                    <div class="informacoes-usuario">
                        <h1>Rosa Mosqueta</h1>
                        <p>Nivel de Acesso == Baixo :3</p>
                    </div>
                </div>
            </header>
        </main>
</template>

<style lang="css" scoped>
.main-container {
    flex: 2;
    min-width: 0 ;
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
}

/* HEADER */
.cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 9px;
}

.titulo-header h1 {
    font-size: 1.5rem;
    font-weight: bolder;
    color: #1b254b;
}

.titulo-header p {
    color: #9aa4c3;
}

.perfil-usuario {
    display: flex;
    align-items: center;
    gap: 20px;
}

.informacoes-usuario {
    text-align: right;
}

.informacoes-usuario h1 {
    font-size: 0.95rem;
    color: #1b254b;
}

.informacoes-usuario p {
    font-size: 0.8rem;
    color: #a3aed0;
}
</style>