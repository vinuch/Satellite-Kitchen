<template>
  <div class="text-center sm:12 px-4 sm:mx-10">
    <h3 class="text-primary text-sm">Menu</h3>
    <h2 class="font-bold text-2xl py-2">Explore Our Best Menu </h2>
    <p class="sm:w-4/12 mx-auto text-sm">its through mistakes that you actually can grow you get rid of everything that is not essential to get bad </p>
    
    <div class="flex flex-wrap justify-around mx-auto my-16">
      <FoodCard v-for="item in menu" :item="item" :key="item._id" @clicked="showAddModal"/>
      <!-- {{data}} -->

    
    </div>
    <modal v-if="modalItem" name="add-item-modal" adaptive scrollable height="auto">
        <p class="py-2">add item to Bag</p>
        <div class="flex flex-wrap sm:flex-no-wrap items-center justify-between mx-6 border rounded-md p-2 mt-2 mb-6">
          <img class="mx-auto w-32" :src="modalItem.image" :alt="modalItem.title">
          <div class="w-full ml-4">
            <p class="text-left font-bold text-xl py-2">1 plate of {{ modalItem.title}}</p>
            <div class="text-left flex items-end justify-between my-2">
              <div>
                <label for="meat" class="mr-2 text-sm"> Choose meat</label>
                <select name="meat" id="meat" class="border rounded text-sm" v-model="newItem.meat[0].name">
                  <option value="shaki">shaki</option>
                  <option value="beef">beef</option>
                  <option value="round about">round about</option>
                  <option value="Goat meat">Goat meat</option>
                </select>
              </div>

              <div>
                <label for="meat" class="mr-2 text-sm">Amount</label>
                <input type="number" name="amount" class="w-12 border rounded text-center" value="2" min="2" v-model="newItem.meat[0].amount">
              </div>

              <button class="bg-black px-2 rounded text-xs text-white">+ extra</button>

            </div>

            <div v-if="checkIsSoup()" class="text-left flex items-end justify-between">
              <div>
                <label for="swallow" class="mr-2 text-sm"> Choose swallow</label>
                <select name="swallow" id="swallow" class="border rounded text-sm" v-model="newItem.swallow[0].name">
                  <option value="semo">semo</option>
                  <option value="fufu">fufu</option>
                  <option value="wheat">wheat</option>
                  <option value="Garri">garri</option>
                </select>
              </div>

              <div>
                <label for="meat" class="mr-2 text-sm">Amount</label>
                <input type="number" name="amount" class="w-12 border rounded text-center" value="1" v-model="newItem.swallow[0].amount">
              </div>

              <button class="bg-black px-2 rounded text-xs text-white">+ extra</button>

            </div>

            
           
          </div>
        </div>
        <div class="text-right p-2 mx-6 ">
          <h4 class="font-bold text-xl">Summary</h4>
            <div class="flex justify-end items-center">
              <p class="text-right  py-2">1 plate of <span class="font-bold">{{ modalItem.title}}</span>  with <span class="font-bold"> {{newItem.meat[0].amount}} {{newItem.meat[0].name}}</span> and <span class="font-bold"> {{newItem.swallow[0].amount}} {{newItem.swallow[0].name}}</span></p>
              <p> - ₦{{modalItem.price}}</p>
            </div>
            
            <p>Total - ₦{{modalItem.price}}</p>
            <button @click="addtoCart(modalItem)" class="bg-primary text-white text-sm px-4 py-2 mt-2 rounded">Add to Bag</button>
          <p></p>
        </div>
    </modal>
      <button class="bg-primary py-2 px-8 shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1 rounded-full text-white font-semibold text-lg">Load More</button>

  </div>
</template>

<script>
import FoodCard from "./FoodCard"
import axios from 'axios'
import { mapActions } from 'vuex'

  export default {
    props: ['menu'],
    components: {
      FoodCard
    },
    data() {
      return {
        modalItem: this.menu[0],
        newItem: {
          meat: [{
            name: 'shaki',
            amount: 2
          }],
          swallow: [{
            name: 'semo',
            amount: 1
          }]
        }
      }
    },
    methods: {
      ...mapActions({
        addItem: 'cart/addItem'
      }),
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
        showAddModal(id) {
          const found = this.menu.find(item => item._id == id)
          this.modalItem = found

          this.show()
        },
        addtoCart(item) {
          this.hide()
          this.addItem(item)
          console.log(item)
        }
    },

  }
</script>

<style lang="scss" scoped>

</style>