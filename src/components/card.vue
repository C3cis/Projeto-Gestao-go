<script setup>
defineProps({
    icone: {
    type: String,
    required: true
  },  
  titulo: {
    type: String,
    required: true
  },
  valor: {
    type: [String, Number],
    required: true
} 
})
</script>
<template>
    <article class="card">
    <div class="card-grid">
      <div class="card-icon">
        <img :src="icone" alt="Ícone do card" class="icon-image">
      </div>
      <div class="card-info">
        <h3 class="card-title">{{ titulo }}</h3>
        <p class="card-value">{{ valor }}</p>
      </div>
    </div>
  </article>
</template>
<style lang="css" scoped>
.card {
  background: var(--text-light);
  border: 1px solid var(--color-border-tertiary);

  border-radius: 10px;

  padding: 3%;

  display: flex;
  flex-direction: column;
  

  gap: 3px;

  width: 100%;
}

.card-icon {
  background: var(--color-background-primary);
  border: 0.5px solid var(--color-border-tertiary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-title {
  color: var(--text-light); /* ← cinza muted adaptável */
  font-size: 13px;
  font-weight: 500;
  margin: 0;
}

.card-value {
  color: var(--color-text-primary); /* ← texto principal adaptável */
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
}
</style>