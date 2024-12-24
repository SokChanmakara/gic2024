<template>
    <div class="container">
        <div class="sidebar">
            <h1>Menu</h1>
            <ul>
                <li @click="setSection(1)"><a href="#">Section 1</a></li>
                <li @click="setSection(2)"><a href="#">Section 2</a></li>
                <li @click="setSection(3)"><a href="#">Section 3</a></li>
                <li @click="setSection(4)"><a href="#">Section 4</a></li>
            </ul>
        </div>
        <div class="content">
            <h1>Welcome to Page 1</h1>
            <h3>This is section {{ selectedSection }} of page 1</h3>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            selectedSection:1
        }
    },
    methods:{
        setSection(section){
            this.selectedSection = section;
        }
    }
}
</script>

<style scoped>
    .container{
        display:flex;
        justify-content: space-between;
        align-content: center;
    }
    .sidebar{
        padding:1rem;
    }
    li,
    li > a{
        text-decoration: none;
        list-style: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:24px;
        color:rgb(53, 52, 52);
        font-weight:300 ;
    }
    .content{
        display:flex;
        flex-direction: column;
        position:absolute;
        right:45%;
        top:50%;
        
    }
</style>