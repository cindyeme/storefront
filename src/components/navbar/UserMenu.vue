<script setup>
import IconMenu from '../icons/IconMenu.vue';

</script>

<template>
  <div class="relative">
    <div class="flex flex-row items-center gap-2">
      <div
        class="p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        title="Menu"
      >
      <IconMenu />
        <div class="hidden md:block">
          <img
            alt="Avatar"
            class="rounded-full"
            src="/placeholder.jpg"
            width="30"
            height="30"
          />
        </div>
      </div>
    </div>
  </div>
</template>
