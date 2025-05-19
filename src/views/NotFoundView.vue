<template>
  <div class="text-center p-10">
    <h1>404 - {{ $t('notFound') }}</h1>
    <p>{{ $route.path }}</p>
    <Button @click="$router.push('/home')" :label="$t('goHome')" />
  </div>
</template>

<script setup>
import Button from 'primevue/button'
</script>
