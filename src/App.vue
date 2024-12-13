<script setup>
import { RouterLink,RouterView} from 'vue-router'

</script>

<template>
  <div class="header">
    <h1>Header</h1>
    <div class="btn-container">
      <router-link to="/Page1" class="btn" active-class="active">Page1</router-link>
      <router-link to="/Page2" class="btn" active-class="active">Page2</router-link>
      <router-link to="/Page3" class="btn" active-class="active">Page3</router-link>
    </div>
  </div>
  <router-view></router-view>

  <div class="footer">
    <h1>Footer</h1>
  </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.btn-container {
    display: flex;
    justify-content: space-evenly;
    padding:1rem;
    gap: 15px;
}
.btn{
  text-decoration: none;
  font-size:20px;
  color:black;
}
.footer {
    display: flex;
    padding: 1rem;
    justify-content: center;
    margin-top: auto;
}
.active{
  color:red;
}
</style>