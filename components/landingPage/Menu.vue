<template>
  <div class="text-center my-12 mx-32">
    <h3 class="text-primary text-sm">Menu</h3>
    <h2 class="font-bold text-2xl py-2">Explore Our Best Menu </h2>
    <p class="w-4/12 mx-auto text-sm">its through mistakes that you actually can grow you get rid of everything that is not essential to get bad </p>
    
    <div class="flex flex-wrap justify-around mx-auto my-16">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    
    </div>
      <button class="bg-primary py-2 px-8 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-white font-semibold text-lg">Load More</button>

  </div>
</template>

<script>
import FoodCard from "./FoodCard"
  export default {
    components: {
      FoodCard
    }
  }
</script>

<style lang="scss" scoped>

</style>