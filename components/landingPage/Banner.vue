<template>
  <div class="flex px-24 items-start mt-32 justify-between banner bg-center bg-no-repeat bg-bottom bg-90 h-full pb-32 w-screen">
    <div class="py-16 w-5/12">
      <h1 class="text-5xl font-bold mb-4">Your Favourite Food Delivered Hot & Fresh</h1>
      <p class="mb-8">Health swithcher chefs do all the prep work like peeling <br/> chopping and marinating, so you can cook a fresh food. </p>
      <button class="bg-primary py-2 px-8 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-white font-semibold text-lg">Order Now <img class="inline w-8" src="../../assets/images/arrow.svg" alt=""></button>
    </div>
    
      <img class="banner-img" src="../../assets/images/soupplate.svg" alt="Shopping cart icon">

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.banner-img {
  width: 40rem
}
.shadower {
  box-shadow: -120px 170px 130px grey;
}
</style>