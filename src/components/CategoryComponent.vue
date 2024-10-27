<template>
    <div class="container">
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        <div class="items">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="burger">
            <h3>Cake & Milk</h3>
            <p>14 items</p>
        </div>
        
    </div>
</template>

<script>
export default{
    name: 'CategoryComponent'
}
</script>

<style scoped>
/*TODO: Haven't style the component yet*/
    .container{
        display:flex;
        flex-direction: row;
        overflow: none;
        margin-top:0;
        position:fixed;
        top:20px;
        right: 0px;
        left:20px;
        width: 100%;
        z-index:1000;
    }
    .items{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        background-color:#f2fce4;
        margin-right: 20px;
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
