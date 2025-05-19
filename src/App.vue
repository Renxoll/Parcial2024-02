<template>
  <div>
    <Toolbar>
      <template #start>
        <img src="https://logo.clearbit.com/eventify.io" alt="logo" width="30" />
        <span class="ml-2">{{ $t('certified') }}</span>
      </template>
      <template #center>
        <router-link to="/home">{{ $t('home') }}</router-link>
        <router-link to="/registration/event-check-ins/new" class="ml-4">{{ $t('checkIn') }}</router-link>
      </template>
      <template #end>
        <Button label="EN" @click="switchLang('en')" size="small" />
        <Button label="ES" @click="switchLang('es')" size="small" class="ml-2" />
      </template>
    </Toolbar>

    <router-view />
  </div>
</template>

<script setup>
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const switchLang = (lang) => {
  locale.value = lang
}
</script>