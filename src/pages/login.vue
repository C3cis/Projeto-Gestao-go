<script setup> 
</script>
<template>
 <div>
        <img class="logo" src="" alt="Logotipo qualquer" draggable="false">
        <h1>Sisteminha de Gestão</h1>
    </div>
    
    <section class="caixa-entrada">
        <p>Email</p>
        <input type="email" id="emailInput" placeholder="seu.nome@br">
        
        <p>Senha</p>
        <input type="password" id="senhaInput" placeholder="*******">
        
        <button type="button" onclick="fazerLogin()">Acessar Sistema</button>
        
        <div class="estilo">
            <button type="button" class="botao" onclick="prencherAdm()">Administrador</button>
            <button type="button" class="botao" onclick="prencherTec()">Técnico</button>
        </div>
    </section>


</template>
<style lang="css" scoped>

</style>