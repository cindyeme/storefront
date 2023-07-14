<template>
  <div
    class="border-[1px] w-full py-0.5 md:w-[500px] rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
  >
    <div class="flex flex-row items-center justify-between">
      <input
        type="search"
        class="rounded-full text-sm flex-1 focus:shadow-none focus:outline-0 focus:border-0 h-full w-full px-4"
        placeholder="Search by breed"
      />
      <div
        class="text-sm px-6 text-white flex flex-row items-center gap-3 cursor-pointer bg-teal-500 rounded-full py-2"
      >
        <div class="block">Find dog</div>
      </div>
    </div>
  </div>
</template>
