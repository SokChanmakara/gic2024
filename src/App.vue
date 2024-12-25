<script>
import { usePageStore } from './stores/pageStore';
export default {
    setup(){
        const store = usePageStore();
        return {
            store,
        }
    },
    data(){
        return{
            message: "",
        }
    },
    methods:{
        passMessage(toPage){
            this.store.lastPage = this.currentPage;
            this.store.pages[this.currentPage] = this.message;
            this.message = '';
        },
    },
    computed:{
        currentPage(){
            return this.$route.params.pageNumber;
        }
    }
}
</script>

<template>
  <div class="header">
    <h1>Header</h1>
    <div class="btn-container">
      <template v-for="n in 3" :key="n">
        <router-link :to="`/page/${n}`" class="btn" active-class="active" @click="passMessage(n)"> Page {{ n }}</router-link>
      </template>
    </div>
  </div>
  <div class="sidebar">
    <h1>Menu</h1>
    <template v-for="n in 4" :key="n">
      <router-link :to="`/page/${$route.params.pageNumber}/section/${n}`" class="section-menu">Section {{ n }}</router-link>
    </template>
  </div>
  <div class="message-section">
    <router-view></router-view> 
    <div>
      <p>Message</p>
      <input type="text" v-model="message">
    </div>
  </div>
  <div class="footer">
    <h1>Footer</h1>
  </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.btn-container {
    display: flex;
    justify-content: space-evenly;
    padding:1rem;
    gap: 15px;
}
.btn{
  text-decoration: none;
  font-size:20px;
  color:black;
}
.footer {
    display: flex;
    padding: 1rem;
    justify-content: center;
    margin-top: auto;
}
.active{
  color:red;
}
.sidebar{
    padding:1rem;
    display:flex;
    flex-direction: column;
}
.section-menu{
    text-decoration: none;
    list-style: none;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:24px;
    color:rgb(53, 52, 52);
    font-weight:300 ;
}
.message-section{
    display:flex;
    justify-content: center;
}
</style>