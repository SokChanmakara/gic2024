import {defineStore} from 'pinia'

export const usePageStore = defineStore('message',{
    state: ()=>{
        return{
            pages: {},
            lastPage:1,
        }
    }
})