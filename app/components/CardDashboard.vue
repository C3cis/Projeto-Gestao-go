<!-- components/CardDashboard.vue -->
<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { ItemDashboard } from '~/types/dashboard'

  defineProps({
    icone: { type: String, required: true },
    titulo: { type: String, required: true },
    itens: { type: Array as PropType<ItemDashboard[]>, required: true },
    corBadge: { type: String as PropType<'urgente' | 'alerta' | 'normal'>, default: 'normal' },
  })

  const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <article
    class="flex flex-col rounded-[20px] border border-black bg-violet-50/40 p-2 text-xs dark:bg-neutral-800/90">
    <div class="p-2">
      <div class="mb-2 flex items-center gap-2">
        <Icon :name="icone" class="text-2xl text-amber-950 dark:text-rose-200" />
        <h3 class="text-base font-medium dark:text-rose-400">{{ titulo }}</h3>
      </div>

      <div v-if="itens.length === 0" class="p-3 text-xs text-neutral-400">
        {{ t('cardDashboard.vazio') }}
      </div>

      <div
        v-for="item in itens"
        :key="item.id"
        class="mb-2 rounded-[10px] border-l-4 bg-rose-50/70 p-2 dark:bg-neutral-900/60"
        :class="badgeStyles[corBadge ?? 'normal']">
        <p class="text-sm font-medium dark:text-neutral-50">{{ item.titulo }}</p>
        <p class="text-xs text-neutral-500 dark:text-neutral-300">{{ item.subtitulo }}</p>
      </div>
    </div>
  </article>
</template>

<i18n lang="json">
{
  "pt": {
    "cardDashboard": {
      "vazio": "Nada por aqui no momento"
    }
  },
  "en": {
    "cardDashboard": {
      "vazio": "Nothing here right now"
    }
  }
}
</i18n>
