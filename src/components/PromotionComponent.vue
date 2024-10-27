<template>
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
        rel="stylesheet"
    />
    <div class="container">
        <div class="content">
            <div class="wrapper text">
                <div class="dpt">
                    <h1>Everyday Fresh & Clean with Our Products</h1>
                </div>
                <div class="btn">
                    <button>
                        Shop Now
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
            <div class="wrapper image">
                <img
                    id="image"
                    src="https://images.unsplash.com/photo-1439127989242-c3749a012eac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="fruit"
                />
            </div>
        </div>
        
        <div class="content">
            <div class="wrapper text">
                <div class="dpt">
                    <h1>Everyday Fresh & Clean with Our Products</h1>
                </div>
                <div class="btn">
                    <button>
                        Shop Now
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
            <div class="wrapper image">
                <img
                    id="image"
                    src="https://images.unsplash.com/photo-1439127989242-c3749a012eac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="fruit"
                />
            </div>
        </div>
        
        <div class="content">
            <div class="wrapper text">
                <div class="dpt">
                    <h1>Everyday Fresh & Clean with Our Products</h1>
                </div>
                <div class="btn">
                    <button>
                        Shop Now
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
            <div class="wrapper image">
                <img
                    id="image"
                    src="https://images.unsplash.com/photo-1439127989242-c3749a012eac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="fruit"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromotionComponent'
}
</script>

<style scoped>

.container {
    display: flex;
    position: relative;
    right:400px;
    justify-content: space-between;
    gap: 40px; /* Space between content elements */
    padding: 20px 70px; /* Optional padding around the container */
    margin:0;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center; /* Changed from align-content to align-items */
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
