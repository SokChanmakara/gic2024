<script setup>
const showTab = (tabId) => {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tabs button');

    contents.forEach(content => {
        content.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tabs button[data-tab="${tabId}"]`).classList.add('active');
}
</script>
<template>
    <div class="container">
        <div class="breadcrumb">
            <a href="#">Home</a> > <a href="#">Vegetables & Grains</a> > Seeds of Change Organic
        </div>

        <div class="product">
            <div class="image">
                <img src="../assets/Category/orange.png" alt="Product Image">
            </div>
            <div class="details">
                <h1>Seeds of Change Organic Quinoa, Brown</h1>
                <div class="price">
                    $38 <span class="original">$42</span>
                </div>
                <div class="rating">★★★★☆</div>
                <div class="add-to-cart">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>

        <div class="tabs">
            <button class="active" @click="showTab('description')" data-tab="description">Description</button>
            <button @click="showTab('additional-info')" data-tab="additional-info">Additional Info</button>
            <button @click="showTab('reviews')" data-tab="reviews">Reviews</button>
        </div>

        <div id="description" class="tab-content active">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div id="additional-info" class="tab-content">
            <p>Additional information about the product goes here.</p>
        </div>
        <div id="reviews" class="tab-content">
            <p>Customer reviews will be displayed here.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
            width: 90%;
            max-width: 1200px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        .breadcrumb {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
        }

        .breadcrumb a {
            text-decoration: none;
            color: #3498db;
        }

        .product {
            display: flex;
            gap: 20px;
        }

        .product img {
            max-width: 100%;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .details {
            flex: 1;
        }

        .details h1 {
            font-size: 24px;
            margin: 0 0 10px;
        }

        .price {
            font-size: 20px;
            color: #27ae60;
        }

        .price .original {
            text-decoration: line-through;
            color: #aaa;
            margin-left: 10px;
        }

        .rating {
            margin: 10px 0;
            color: #f39c12;
        }

        .add-to-cart {
            margin-top: 20px;
        }

        .add-to-cart button {
            background: #27ae60;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .add-to-cart button:hover {
            background: #219150;
        }

        .tabs {
            margin-top: 40px;
        }

        .tabs button {
            background: #f0f0f0;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
            margin-right: 5px;
            border-radius: 4px;
        }

        .tabs button.active {
            background: #27ae60;
            color: #fff;
        }

        .tab-content {
            margin-top: 20px;
            display: none;
        }

        .tab-content.active {
            display: block;
        }
</style>