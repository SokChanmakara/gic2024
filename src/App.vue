<template> 
<!-- <ButtonComponent /> -->
 <CategoryComponent v-for="category in categories" :name="category.name" :productCount="category.productCount" :image="category.image" :color="category.color" :key="category"/>
 <PromotionComponent v-for="promotion in promotions" :title="promotion.title" :color="promotion.color" :image="promotion.image" :buttonColor="promotion.buttonColor" :url="promotion.url" :key="promotion.title"></PromotionComponent>

</template>


  <script>
  // import { RouterView } from 'vue-router'
  import { mapState } from 'pinia';
  import { useProductStore } from './stores/product';
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
    setup() {
      const productStore = useProductStore();

      return {
        productStore
      }
    },

    data(){
      return{
        currentGroupName: "Snacks"
      }
    },
    computed: {
      ...mapState(useProductStore, {
        categories: "categories",
        promotions: "promotions",
        products: "products",
        groups: "groups",

        // categories(store) {
        //   const category = store.getCategoriesByGroup(this.currentGroupName)
        //   console.log("Categories by group name");
        //   console.log(category);
        //   return category;
        // },

        popularProducts(store){
          const products = store.getProductsByGroup()
          console.log("Popular products")
          console.log(products)
          return products;
        }
      })
    },
    async mounted() {
      await this.productStore.fetchCategories();
      await this.productStore.fetchPromotions();
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
