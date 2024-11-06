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
        categories:[
        {
                    name: 'cake & Milk',
                    productCount: 14,
                    color: "#f2fce4",
                    image: "../src/assets/Category/burger.png",
                },
                {
                    name: 'Peach',
                    productCount: 17,
                    color: "#fffceb",
                    image: "../src/assets/Category/peach.png",
                },
                {
                    name: 'Organic Kiwi',
                    productCount: 21,
                    color: "#fecffec",
                    image: "../src/assets/Category/kiwi.png",
                },
                {
                    name: 'Red Apple',
                    productCount: 68,
                    color: "#feefea",
                    image: "../src/assets/Category/apple.png",
                },
                {
                    name: 'Snack',
                    productCount: 34,
                    color: "#fff3eb",
                    image: "../src/assets/Category/snack.png",
                },
                {
                    name: 'Black Plum',
                    productCount: 25,
                    color: "#fff3ff",
                    image: "../src/assets/Category/plum.png",
                },{
                    name: 'Vegetables',
                    productCount: 65,
                    color: "#f2fce4",
                    image: "../src/assets/Category/cab.png",
                },
                {
                    name: 'Headphone',
                    productCount: 33,
                    color: "#fffceb",
                    image: "../src/assets/Category/headphone.png",
                },
                {
                    name: 'cake & Milk',
                    productCount: 54,
                    color: "#f2fce4",
                    image: "../src/assets/Category/cracker.png",
                },
                {
                    name: 'Orange',
                    productCount: 63,
                    color: "#fff3ff",
                    image: "../src/assets/Category/orange.png",
                },
        ],
        promotions:[
          {
             title: "Everyday Fresh and Clean with Our Products",
             color: "#f0e8d5",
             image: "../src/assets/Promotion/onion.png",
             buttonColor: "#42B678",
             url: "/promotions/1",
          },
          {
             title: "Make your breakfast Healthy and Easy",
             color: "#f3e8e8",
             image: "../src/assets/Promotion/milk.png",
             buttonColor: "#42B678",
             url: "/promotions/1",
          },
          {
             title: "The best Organic Products Online, the product",
             color: "#e7eaf3",
             image: "../src/assets/Promotion/vege.png",
             buttonColor: "#fdc040",
             url: "/promotions/1",
          },

        ]
      }
    },
    methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
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
