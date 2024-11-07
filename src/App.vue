<template> 
<!-- <ButtonComponent /> -->
 <CategoryComponent v-for="category in categories" :name="category.name" :productCount="category.productCount" :image="category.image" :color="category.color" :key="category.name"/>
 <PromotionComponent v-for="promotion in promotions" :title="promotion.title" :color="promotion.color" :image="promotion.image" :buttonColor="promotion.buttonColor" :url="promotion.url" :key="promotion.title"></PromotionComponent>
  <RouterView />
</template>


  <script>
  // import { RouterView } from 'vue-router'
  import axios from 'axios';
  import CategoryComponent from './components/CategoryComponent.vue';
  import PromotionComponent from './components/PromotionComponent.vue';
  // import ButtonComponent from './components/ButtonComponent.vue';
  export default {
    name: 'App',
    components: {
      CategoryComponent,
      PromotionComponent,
      // ButtonComponent
    }, 
    data(){
      return{
        categories: [],
        promotions: []
      }
    },
    methods: {
      async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
        this.categories = [];
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error('Error fetching promotions:', error);
        this.promotions = []; 
      }
    }
  },
  async mounted() {
    try {
      await Promise.all([
        this.fetchCategories(),
        this.fetchPromotions()
      ]);
    } catch (error) {
      console.error('Error during data initialization:', error);
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  }

    }
  
  </script>

<style scoped>
template{
  box-sizing: border-box;
  margin:none;
  padding:none;
  overflow:none;
 
}
</style>
