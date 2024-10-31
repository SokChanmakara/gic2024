<template>
    <div class="container" v-for="category in categories" :key="category.name">
        <div class="items" :style="{ backgroundColor: '#' + category.color }">
            <img :src="category.image" alt="burger">
            <h3>{{ category.name }}</h3>
            <p>{{ category.productCount }} items</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryComponent',
    data() {
        return {
            categories: [
                {
                    name: 'cake & Milk',
                    productCount: 14,
                    color: "f2fce4",
                    image: "../src/assets/Category/burger.png",
                },
                {
                    name: 'Peach',
                    productCount: 17,
                    color: "fffceb",
                    image: "../src/assets/Category/peach.png",
                },
                {
                    name: 'Organic Kiwi',
                    productCount: 21,
                    color: "fecffec",
                    image: "../src/assets/Category/kiwi.png",
                },
                {
                    name: 'Red Apple',
                    productCount: 68,
                    color: "feefea",
                    image: "../src/assets/Category/apple.png",
                },
                {
                    name: 'Snack',
                    productCount: 34,
                    color: "fff3eb",
                    image: "../src/assets/Category/snack.png",
                },
                {
                    name: 'Black Plum',
                    productCount: 25,
                    color: "fff3ff",
                    image: "../src/assets/Category/plum.png",
                },{
                    name: 'Vegetables',
                    productCount: 65,
                    color: "f2fce4",
                    image: "../src/assets/Category/cab.png",
                },
                {
                    name: 'Headphone',
                    productCount: 33,
                    color: "fffceb",
                    image: "../src/assets/Category/headphone.png",
                },
                {
                    name: 'cake & Milk',
                    productCount: 54,
                    color: "f2fce4",
                    image: "../src/assets/Category/cracker.png",
                },
                {
                    name: 'Orange',
                    productCount: 63,
                    color: "fff3ff",
                    image: "../src/assets/Category/orange.png",
                },
            ]
        };
    }
}
</script>

<style scoped>
/*TODO: Haven't style the component yet*/
    .container{
        display:inline-flex;
        flex-direction: row;
       
    }
    .items{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin:8px;
        background-color:#f2fce4;
        color: black;
        padding:50px 40px;
        text-align: center;
        border-radius: 10px;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background-position: center;
    }
    p{
        color: #c6cabf;
    }
</style>
