<template>
  <div class="p-4">
    <h1>{{ $t('home') }}</h1>
    <p>{{ $t('welcome') }}</p>

    <h2 class="mt-4">{{ $t('registeredEvents') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <EventSummary v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import EventSummary from '../components/EventSummary.vue'

const events = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/events')
  events.value = res.data
})
</script>
