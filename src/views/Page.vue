<template>
    <div class="content">
        <h1>Welcome to Page {{ $route.params.pageNumber }}</h1>
        <RouterView/>
        <hr>
        <p v-show="forMessage">
            Message from Page {{ store.lastPage }}: {{ getMessage }}
        </p>
    </div>
</template>

<script>
import { usePageStore } from '@/stores/pageStore';
export default {
    setup(){
        const store = usePageStore();
        return {
            store,
        }
    },
    computed:{
        getMessage(){
            const fromPage = this.store.lastPage;
            const message = this.store.pages[fromPage];
            if(message){
                return message;
            }
            return " ";
        },
        forMessage(){
            const fromPage = this.store.lastPage;
            const currentPage = this.$route.params.pageNumber;
            
            if(currentPage == fromPage){
                return false;
            }
            if(this.store.pages[fromPage]){
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
    .content{
        display:flex;
        flex-direction: column;
        position:absolute;
        right:45%;
        top:50%;
    }
</style>