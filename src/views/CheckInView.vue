<template>
  <div class="p-4">
    <h1>{{ $t('eventCheckIn') }}</h1>

    <h2 class="mt-4">{{ $t('ticketValidation') }}</h2>
    <div class="flex gap-2 items-end">
      <label for="ticket">{{ $t('ticketIdentifier') }}</label>
      <InputText id="ticket" v-model="ticket" />
      <Button @click="checkTicket" label="Check-In" />
    </div>

    <div class="mt-4">
      <p v-if="message">{{ message }}</p>
      <div v-if="attendee">
        <p><strong>Event:</strong> {{ eventData.name }}</p>
        <p><strong>Description:</strong> {{ eventData.description }}</p>
        <p><strong>Name:</strong> {{ attendee.firstName }} {{ attendee.lastName }}</p>
        <p><strong>Checked-In At:</strong> {{ attendee.checkedInAt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const ticket = ref('')
const message = ref('')
const attendee = ref(null)
const eventData = ref({})

const checkTicket = async () => {
  const res = await axios.get('http://localhost:3000/attendees')
  const match = res.data.find(a => a.ticketIdentifier === ticket.value)

  if (!match) {
    message.value = 'Invalid Ticket Identifier'
    attendee.value = null
    return
  }

  if (match.checkedInAt) {
    message.value = 'Already Checked-In'
    attendee.value = null
    return
  }

  // Update check-in
  const now = new Date().toISOString()
  await axios.patch(`http://localhost:3000/attendees/${match.id}`, {
    checkedInAt: now
  })

  // Get event info
  const eventRes = await axios.get(`http://localhost:3000/events/${match.eventId}`)
  eventData.value = eventRes.data
  match.checkedInAt = now
  attendee.value = match
  message.value = ''
}
</script>
