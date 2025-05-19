<template>
  <Card class="m-2">
    <template #header>
      <h3>{{ event.name }}</h3>
    </template>
    <template #content>
      <p>{{ event.description }}</p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <span>🎟️ {{ attendeesCount }} Registered</span>
        <span>✅ {{ attendancePercent }}% Attendance</span>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Card from 'primevue/card'

const props = defineProps(['event'])
const attendeesCount = ref(0)
const attendancePercent = ref(0)

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/attendees')
  const filtered = res.data.filter(a => a.eventId === props.event.id)
  attendeesCount.value = filtered.length
  const checked = filtered.filter(a => a.checkedInAt)
  attendancePercent.value = filtered.length > 0 ? Math.round((checked.length / filtered.length) * 100) : 0
})
</script>
