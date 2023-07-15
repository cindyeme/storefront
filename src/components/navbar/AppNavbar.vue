<script setup>
import AppContainer from '../AppContainer.vue'
import AppLogo from './AppLogo.vue'
import UserMenu from './UserMenu.vue'
</script>

<template>
  <nav class="fixed w-full bg-white shadow-md z-50">
    <div class="py-4">
      <AppContainer>
        <div class="flex items-center justify-between gap-3 md:gap-0">
          <AppLogo />
          <UserMenu />
        </div>
      </AppContainer>
    </div>
  </nav>
</template>
