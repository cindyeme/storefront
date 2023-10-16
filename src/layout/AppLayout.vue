<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <RouterLink to="/" class="font-bold">My Storefront</RouterLink>
      </nav>
    </header>

    <div class="container mx-auto px-8 md:px-4 py-8">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between">
      <ul class="flex gap-4">
        <!-- <li><RouterLink to="/">Products</RouterLink></li> -->
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
