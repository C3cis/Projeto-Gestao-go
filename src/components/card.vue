<script setup>
   defineProps({
  titulo: String,
  valor: [String, Number],
  icone: String
})
</script>
<template>
    <article class="card">
    
    <div class="card-icon">
      <img :src="icone" alt="icone" class="icon-image">
    </div>

    <div class="card-info">
      <h3 class="card-title">{{ titulo }}</h3>
      <p class="card-value">{{ valor }}</p>
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
  justify-content: center;
  text-align: justify;
  justify-content: center;
}

.icon-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.card-title {
  color: var(--text-light); /* ← cinza muted adaptável */
  font-size: 13px;
  font-weight: 500;
  margin: 0;
}

.card-value { /* ← texto principal adaptável */
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
}

</style>