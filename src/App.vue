<template> 
<!-- <ButtonComponent /> -->
 <CategoryComponent v-for="category in categories" :name="category.name" :productCount="category.productCount" :image="category.image" :key="category.name"/>
 <PromotionComponent v-for="promotion in promotions" :title="promotion.title" :color="promotion.color" :image="promotion.image" :buttonColor="promotion.buttonColor" :url="promotion.url" :key="promotion.title"></PromotionComponent>
  <RouterView />
</template>


  <script>
  // import { RouterView } from 'vue-router'
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
        categories:[
          {
            name: 'Cake & Milk',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/burger.png"
          },
          {
            name: 'Peach',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/peach.png"
          },
          {
            name: 'Organic Kivwi',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/kiwi.png"
          },
          {
            name: 'Red Apple',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/apple.png"
          },
          {
            name: 'Snack',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/snack.png"
          },
          {
            name: 'Black Plum',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/plum.png"
          },
          {
            name: 'Vegetable',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/cab.png"
          },
          {
            name: 'Headphone',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/headphone.png"
          },
          {
            name: 'Cake & Milk',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/cracker.png"
          },
          {
            name: 'Oragne',
            productCount: 14,
            color: "#FFF0E9",
            image: "../src/assets/Category/orange.png"
          }
        ],
        promotions:[
          {
             title: "Everyday Fresh and Clean with Our Products",
             color: "#F0E9D7",
             image: "../src/assets/Promotion/onion.png",
             buttonColor: "#42B678",
             url: "/promotions/1",
          },
          {
             title: "Everyday Fresh and Clean with Our Products",
             color: "#F0E9D7",
             image: "../src/assets/Promotion/milk.png",
             buttonColor: "#42B678",
             url: "/promotions/1",
          },
          {
             title: "Everyday Fresh and Clean with Our Products",
             color: "#F0E9D7",
             image: "../src/assets/Promotion/vege.png",
             buttonColor: "#42B678",
             url: "/promotions/1",
          },

        ]
      }
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
