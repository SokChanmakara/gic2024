<template>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
        rel="stylesheet"/>
    <div class="btn">
        <button :style="{ backgroundColor: promotion.buttonColor,color:'white',padding:'8px',border:0,borderRadius:'6px' }">
        Shop Now
        <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</template>

<script>
export default{
    name: 'ButtonComponent'
}
</script>

<style scoped>
</style>
