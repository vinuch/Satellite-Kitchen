<template>
  <div data-aos="fade-down" class="fixed top-0 flex flex-wrap justify-between items-center px-4 sm:px-24 py-4 w-screen z-20" :class="view.atTopOfPage ? 'bg-transparent' : 'bg-white shadow-lg'">
    <h1 class="text-xl sm:text-2xl font-extrabold"><img class="inline w-8 sm:w-12 mr-4" src="../../assets/images/logo.svg" alt="">Satellite kitchen</h1>
    <ul class="hidden sm:flex justify-around items-center">
      <li class="hover:text-primary cursor-pointer px-8 font-thin text-base font-">Home</li>
      <li :class="view.atTopOfPage ? 'hover:text-white' : 'hover:text-primary'" class="cursor-pointer px-8 font-thin text-base font-">Packages</li>
      <li :class="view.atTopOfPage ? 'hover:text-white' : 'hover:text-primary'" class="cursor-pointer px-8 font-thin text-base font-">About Us</li>
      <li :class="view.atTopOfPage ? 'hover:text-white' : 'hover:text-primary'" class="cursor-pointer px-8 font-thin text-base font-">Contact Us</li>
      <li :class="view.atTopOfPage ? 'hover:text-white' : 'hover:text-primary'" class="cursor-pointer relative px-8 font-thin text-base font-">
        <img src="../../assets/images/cart.svg" alt="Shopping cart icon">
          <div v-if="getCartList.length > 0" :class="view.atTopOfPage ? 'bg-white text-black' : 'bg-primary text-white'" class="absolute bottom-0 right-0 mr-6 w-4 h-4 text-center text-sm  rounded-full">{{getCartList.length}}</div>
      </li>
      <li class="px-8 font-thin text-base ">
        <button class=" font-medium py-2 px-8 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-sm" :class="view.atTopOfPage ? 'bg-white text-black' : 'bg-primary text-white'">Order Now</button>
      </li> 
    </ul>
    <div class="relative sm:hidden ">
      <img @click="navOpen = true" class="w-6" src="../../assets/images/menu.svg" alt="menu icon">
      <div v-if="getCartList.length > 0" :class="view.atTopOfPage ? 'bg-white text-black' : 'bg-primary text-white'" class="absolute bottom-0 ml-4 w-4 h-4 text-center text-sm  rounded-full">{{getCartList.length}}</div>
    </div>
    
    <transition name="fade">
        <div v-if="navOpen" class="w-screen h-screen bg-white absolute top-0 overflow-hidden left-0">
        <span @click="navOpen = false" class="absolute text-2xl" style="top: 4rem; right: 3rem">X</span>
        <ul class="flex-col items-center h-full flex justify-center">
        <li class="px-8 py-4 font-thin text-base text-center">Home</li>
        <li class="px-8 py-4 font-thin text-base text-center">Packages</li>
        <li class="px-8 py-4 font-thin text-base text-center">About Us</li>
        <li class="px-8 py-4 font-thin text-base text-center">Contact Us</li>
        <li class="relative px-8 font-thin text-base font-">
          <img src="../../assets/images/cart.svg" alt="Shopping cart icon">
          <div v-if="getCartList.length > 0" class="bg-primary text-white absolute bottom-0 right-0 mr-6 w-4 h-4 text-center text-sm  rounded-full">{{getCartList.length}}</div>
      </li>
        <li class="px-8 py-2 font-thin text-base ">
          <button class=" font-medium py-2 px-8 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-sm" :class="view.atTopOfPage ? 'bg-white text-black' : 'bg-primary text-white'">Order Now</button>
        </li> 
      </ul>
      </div>
    </transition>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
    return {
      navOpen: false,
        view: {
            atTopOfPage: true
        }
    }
},
computed: {
  ...mapGetters({
    getCartList: 'cart/getCartList'
  })
},

// a beforeMount call to add a listener to the window
beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},

methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}

}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
