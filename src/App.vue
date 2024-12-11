<script setup>
import { RouterView } from 'vue-router';
import SearchBoxComponent from './components/SearchBoxComponent.vue';
import menuItemComponent from './components/menuItemComponent.vue';
// import ShowCaseComponent from './components/ShowCaseComponent.vue';
</script>

<template>
  <SearchBoxComponent/>
  <menuItemComponent/>
  <!-- <ShowCaseComponent/> -->
  <RouterView/>
</template>