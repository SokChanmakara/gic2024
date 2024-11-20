import { defineStore } from "pinia";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'
export const useProductStore = defineStore('product', {
    state: () => ({
        groups: [],
        promotions: [],
        categories: [],
        products: [],
    }),
    getters: {
        getCategoriesByGroup: (state) => {
            return (groupName) => state.categories.find((category) => category.group === groupName)
        },
        getProductsByGroup:(state) => {
            const groupCategories = state.categories.filter(category => category.group === groupName);
            return state.products.filter(product => 
                groupCategories.some(category => 
                    category.id === product.categoryId
                )
            )
        },
        getProductsByCategory: (state) => {
            return (categoryId) => 
                state.products.filter(product =>
                    product.categoryId === categoryId
                );
        },
        getPopularProducts: (state) => {
               return state.products.filter(product => 
                    product.countSold > 10
                );
        }
    },
    actions: {
        async fetchCategories(){
            try {
                const response  = await axios.get(' http://localhost:3000/api/categories');
                this.categories = response.data;     
            } catch (error) {
                console.error('Error fetching categories', error);
                this.categories = [];
            }
        },
        async fetchPromotions(){
            try {
                const response = await axios.get('http://localhost:3000/api/promotions');
                this.promotions = response.data;
            } catch (error) {
                console.error("Error fetching promotion",error);
                this.promotions = [];
            }

        },
        async intializeStore(){
            try {
                await Promise.all([
                    this.fetchCategories(),
                    this.fetchPromotions()
                ]);
            } catch (error) {
                console.error('Error during data initialization',error);
            }
        }
    },
});