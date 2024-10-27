<template> 
<!-- <ButtonComponent /> -->
 <CategoryComponent />
 <PromotionComponent />
  <RouterView />
</template>


  <script setup>
  import { RouterView } from 'vue-router'
  import CategoryComponent from './components/CategoryComponent.vue';
  import PromotionComponent from './components/PromotionComponent.vue';
  // import ButtonComponent from './components/ButtonComponent.vue';
  </script>

<style scoped>
template{
  box-sizing: border-box;
  margin:none;
  padding:none;
  overflow:none;
 
}
</style>
