<template>
  <div class="text-center sm:12 px-4 sm:mx-10">
    <h3 class="text-primary text-sm">Menu</h3>
    <h2 class="font-bold text-2xl py-2">Explore Our Best Menu </h2>
    <p class="sm:w-4/12 mx-auto text-sm">its through mistakes that you actually can grow you get rid of everything that is not essential to get bad </p>
    
    <div class="flex flex-wrap justify-around mx-auto my-16">
      <FoodCard v-for="item in menu" :item="item" :key="item.id" @clicked="addItem"/>
      <!-- {{data}} -->

    
    </div>
    <modal name="add-item-modal" adaptive scrollable height="auto">
        <p class="py-2">add item to Bag</p>
        <div class="flex flex-wrap sm:flex-no-wrap items-center justify-between mx-6 border rounded-md p-2 my-2">
          <img class="mx-auto w-32" :src="'http://localhost:1337' + modalItem.image[0].url" :alt="modalItem.title">
          <div class="w-full ml-4">
            <p class="text-left font-bold text-xl py-2">1 plate of {{ modalItem.title}}</p>
            <div class="text-left flex items-end justify-between my-2">
              <div>
                <label for="meat" class="mr-2 text-sm"> Choose meat</label>
                <select name="meat" id="meat" class="border rounded text-sm">
                  <option value="shaki">shaki</option>
                  <option value="beef">beef</option>
                  <option value="round about">round about</option>
                  <option value="Goat meat">Goat meat</option>
                </select>
              </div>

              <div>
                <label for="meat" class="mr-2 text-sm">Amount</label>
                <input type="number" name="amount" class="w-12 border rounded text-center" value="1">
              </div>

              <button class="bg-black px-2 rounded text-xs text-white">+</button>

            </div>

            <div v-if="checkIsSoup()" class="text-left flex items-end justify-between">
              <div>
                <label for="meat" class="mr-2 text-sm"> Choose swallow</label>
                <select name="meat" id="meat" class="border rounded text-sm">
                  <option value="shaki">semo</option>
                  <option value="beef">fufu</option>
                  <option value="round about">wheat</option>
                  <option value="Goat meat">garri</option>
                </select>
              </div>

              <div>
                <label for="meat" class="mr-2 text-sm">Amount</label>
                <input type="number" name="amount" class="w-12 border rounded text-center" value="1">
              </div>

              <button class="bg-black px-2 rounded text-xs text-white">+</button>

            </div>

            
           
          </div>
        </div>
    </modal>
      <button class="bg-primary py-2 px-8 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-white font-semibold text-lg">Load More</button>

  </div>
</template>

<script>
import FoodCard from "./FoodCard"
import axios from 'axios'

  export default {
    props: ['menu'],
    components: {
      FoodCard
    },
    data() {
      return {
        modalItem: this.menu[0]
      }
    },
    methods: {
      checkIsSoup() {
        console.log(this.modalItem.title.includes('soup'));
        return this.modalItem.title.toLowerCase().includes('soup')
      },
        show () {
            this.$modal.show('add-item-modal');
        },
        hide () {
            this.$modal.hide('add-item-modal');
        },
        addItem(id) {
          const found = this.menu.find(item => item.id == id)
          this.modalItem = found

          this.show()
        }
    },

  }
</script>

<style lang="scss" scoped>

</style>