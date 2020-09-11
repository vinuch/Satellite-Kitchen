<template>
  <div class="relative pb-8 bg-white shadow-md my-4 rounded-tr-lg rounded-bl-lg transition duration-500 transform hover:-translate-y-1 ease-in-out hover:scale-105 cursor-pointer w-100 sm:w-2/7 mx-1" >
    <img
      class="imgdrag w-full object-center object-cover rounded-tr-lg rounded-bl-lg h-56"
      :src="item.image"
      :alt="item.title"
    />

    <div class="flex justify-between px-4 py-4">
      <div>
        <h3 class="text-left text-2xl font-semibold">{{item.title}}</h3>
        <p class="text-xs text-left">Served with 1 Bottled water</p>
      </div>
      <span class="text-2xl font-semibold">₦{{ item.price }}</span>
    </div>
    <p class="text-left px-4 text-sm mb-6">
      {{item.description}}
    </p>
    <div class="fixed bottom-0 w-full flex justify-between pt-4 pl-4">
      <div class="flex">
        <img class="w-6" src="../../assets/images/star.svg" alt="rating star" />
        <img class="w-6" src="../../assets/images/star.svg" alt="rating star" />
        <img class="w-6" src="../../assets/images/star.svg" alt="rating star" />
      </div>
      <button @click="onAddtoBag(item._id)" title="add to bag" class="bg-primary px-4 h-100 rounded-tl-lg">
        <img class="w-8 mx-auto" src="../../assets/images/bag.svg" alt="bag icon" />
        <span class="text-xs text-white my-2">add to bag</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    onAddtoBag(id){
      this.$emit('clicked', id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
