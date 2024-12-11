<template>
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"/>

    <div class="container">
        <div><img src="../assets/Category/icon.png" alt=""></div>
        <div id="logo">
            <h1>MELON</h1>
            <p>Mart & Grocery</p>
        </div>
        <div class="search-bar">
            <div id="select">
                <div>
                    <p>All Categories</p>
                </div>
                <div>
                    <i class="ri-arrow-drop-down-line"></i>
                </div>
                <ul>
                    <li class="options">Vegetable</li>
                    <li class="options">Fruit</li>
                    <li class="options">organic</li>
                    <li class="options">Meat</li>
                    <li class="options">Beverage</li>
                </ul>
            </div>
            <input type="text" placeholder="Search for item...">
            <div id="search-icon">
                <i class="ri-search-line"></i>
            </div>
        </div>

        <div class="icon-wrapper">
            <div class="icon">
                <i class="ri-user-line"></i>
                <p>Account</p>
            </div>
            <div class="icon">
                <i class="ri-recycle-line"></i>
                <p>Compare</p>
            </div>
            <div class="icon">
                <i class="ri-heart-line"></i>
                <p>Wishlist</p>
            </div>
            <div class="icon">
                <i class="ri-shopping-cart-line"></i>
                <p>Cart</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 15px;
    }
    #logo {
        margin-left: 15px;
    }
    #logo h1 {
        color: #3BB77E;
        margin: 0;
    }
    #logo p {
        margin: 0;
    }
    .search-bar {
        background: #f5f5f5;
        flex: 1;
        max-width: 800px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        padding: 5px;
        margin-left:100px;
    }
    #search-icon {
        padding: 10px;
        cursor: pointer;
    }
    #select {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px;
        background-color: white;
        border-right: 1px solid #ddd;
        position: relative;
        cursor: pointer;
    }
    #select p{
        color:black;
    }
    #select ul {
        position: absolute;
        top: 100%;
        left: 0;
        list-style: none;
        background: white;
        color:black;
        padding: 10px;
        margin: 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: none;
        width: 100%;
    }
    #select:hover ul {
        display: block;
    }
    .options {
        padding: 5px 0;
        cursor: pointer;
    }
    .options:hover {
        color: #3BB77E;
    }
    input {
        flex: 1;
        height: 40px;
        border: none;
        padding: 0 15px;
        outline: none;
    }
    i {
        color: #3BB77E;
    }

    .icon-wrapper{
        display:flex;
        gap:20px;
        margin-left:150px;
    }
    .icon{
        display:flex;
    }
    .icon > p,
    .icon > i{
        cursor: pointer;
    }
</style>