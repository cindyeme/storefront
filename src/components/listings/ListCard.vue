<template>
  <div class="col-span-1 cursor-pointer group">
    <div class="flex flex-col w-full">
      <RouterLink :to="{ name: 'dog', params: { id: '1' } }">
        <div class="w-full relative mb-3">
          <figure>
            <img
              class="object-cover w-full h-full xs:h-[300px] overflow-hidden transition rounded-xl bg-gray-400"
              :src="dog"
              loading="lazy"
              alt="Dog"
            />
          </figure>
          <!-- <div ref="imageObserver"></div> -->
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({ dog: String })
// import { ref, onMounted, onUnmounted } from 'vue';

// export default {
//   components: {
//     RouterLink
//   },
//   props: {
//     dog: String
//   },
//   setup() {
//     const imageObserver = ref(null);
//     const observed = ref(false);

//     const onIntersect = (entries) => {
//       if (entries[0].isIntersecting) {
//         observed.value = true;
//         unobserve();
//       }
//     };

//     const unobserve = () => {
//       imageObserver.value.disconnect();
//     };

//     onMounted(() => {
//       imageObserver.value = new IntersectionObserver(onIntersect, {
//         rootMargin: '0px',
//         threshold: 0.1
//       });
//       imageObserver.value.observe(imageObserver.value.parentNode);
//     });

//     onUnmounted(() => {
//       unobserve();
//     });

//     return {
//       imageObserver,
//       observed
//     };
//   }
// }
</script>
