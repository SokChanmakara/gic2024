<template>
    <div class="container">
        <div class="sidebar">
            <h1>Menu</h1>
            <ul>
                <li><a href="#">Section 1</a></li>
                <li><a href="#">Section 2</a></li>
                <li><a href="#">Section 3</a></li>
                <li><a href="#">Section 4</a></li>
            </ul>
        </div>
        <div class="content">
            <h1>Welcome to Page 2</h1>
        </div>
    </div>
</template>

<script>
export default {

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
        position:absolute;
        right:45%;
        top:50%;
        
    }
</style>