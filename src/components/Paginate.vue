<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200"
  >
    <p class="text-sm text-gray-600">
      Affichage
      <span class="font-medium">{{ start + 1 }}</span>
      à
      <span class="font-medium">{{ end }}</span>
      sur
      <span class="font-medium">{{ total }}</span> {{ title ?? "" }}
    </p>
    <div class="flex gap-2">
      <button
        @click="$emit('prev')"
        :disabled="currentPage === 1"
        class="px-4 py-2 text-sm font-medium rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Précédent
      </button>
      <button
        @click="$emit('next')"
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Suivant
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  start: Number,
  end: Number,
  total: Number,
  currentPage: Number,
  totalPages: Number,
  title: String,
});

defineEmits(["prev", "next"]);
</script>
