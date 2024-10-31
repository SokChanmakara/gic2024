<template>
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
        rel="stylesheet"
    />
    <div class="container" v-for="promotion in promotions" :key="promotion.title">
        <div class="content" :style="{backgroundColor:promotion.color}">
            <div class="wrapper text" >
                <div class="dpt">
                    <h1>{{ promotion.title }}</h1>
                </div>
                <div class="btn">
                    <button :style="{ backgroundColor: promotion.buttonColor,color:'white',padding:'8px',border:0,borderRadius:'6px' }">
                        Shop Now
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
            <div class="wrapper image">
                <img
                    id="image"
                    :src="promotion.image"
                    alt="fruit"
                />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'PromotionComponent',
    data(){
        return{
            promotions:[
                {
                    title: "Everyday Fresh & Clean with Our Products",
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
                    title: "Everyday Fresh & Clean with Our Products",
                    color: "#e7eaf3",
                    image: "../src/assets/Promotion/vege.png",
                    buttonColor: "#fdc040",
                    url: "/promotions/1",
                }
            ]
        }
    }
}
</script>

<style scoped>

.container {
    display: inline-flex;
    flex-direction: row;
    padding:5px;
    gap:20px;
    margin-top:10px;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #f0e8d5;
    color: black;
    width: 600px;
    height: 350px;
    margin: 0;
    padding: 30px 50px;
    border-radius: 15px;
}

.wrapper {
    width: 50%;
}

.wrapper.text {
    align-self: center;
    justify-self: center;
    flex-grow: 2;
}

.wrapper.image {
    align-self: flex-end;
    flex-grow: 1;
}

#image {
    width: 100%; /* Adjusted to make the image responsive */
    height: auto; /* Maintain aspect ratio */
}

</style>
