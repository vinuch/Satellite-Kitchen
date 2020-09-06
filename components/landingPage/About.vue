<template>
  <div class="about h-100 mt-24 sm:py-32 flex flex-wrap justify-between px-8">
    <div class="relative w-11/12 sm:w-6/12">
      <img class="about-img absolute top-0 left-0 banner-img " src="../../assets/images/jollof.png" alt="Shopping cart icon">
    </div>
    <div  data-aos="fade-left" data-aos-delay="900" class="sm:w-6/12 sm:px-8 mt-56 mb-32 sm:m-0">
      <h3 class="text-primary text-sm font-semibold">About</h3>
      <h2 class="font-bold text-4xl py-4">Food Is an Important Part Of a balanced Diet</h2>
      <p class="sm:w-7/12 text-sm leading-7 text-left">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. <br> <br> Separated they live in Bookmarksgrove right at the coast of
        the Semantics, a large language ocean. A small river named Duden flows by their place and
        supplies it with the necessary regelialia. <br> <br> It is a paradisematic country, in which 
      </p>
      <div class="flex py-4 mt-8">
        <button class="bg-primary py-2 px-6 mr-6 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-white font-semibold text-lg">Learn more <img class="inline w-8" src="../../assets/images/arrow.svg" alt=""></button>
        <div class="cursor-pointer">
          <!-- <button class="bg-darkGrey p-1 rounded-full text-white font-semibold text-lg"> <img class="inline w-8" src="../../assets/images/play.svg" alt=""></button>
          Video -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.about {
  background-size: contain ;
  background-repeat: no-repeat;
  background-position: left -25rem top 0rem;
  background-image: url('../../assets/images/circle.svg');

}
.about-img {
  width: 50rem;
}

</style>