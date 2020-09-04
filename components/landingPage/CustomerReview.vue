<template>
  <div class="mx-32 my-32">
    <h3 class="text-primary text-sm text-center">Testimonial</h3>

    <h1 class="text-center text-3xl my-2 font-medium">
      What Our Customers are saying
    </h1>
    <p class="text-sm mx-auto text-center w-6/12 mb-16">
      To succeed you must believe. When you believe, you will succeed. You
      smart, you loyal, you a genius. The key is to enjoy life, because they
      don’t want you to enjoy life
    </p>
    <div class="flex left">
      <img
        class="w-24 h-24 rounded-full"
        src="../../assets/images/user.svg"
        alt="user image"
      />
      <div class="relative bg-white h-32 w-4/12 rounded-lg mx-8 p-4">
        <div>
          <span class="text-3xl font-bold">"</span>

          <p class="inline text-sm">
            To succeed you must believe. When you believe, you will succeed. You
            smart, you loyal, you a genius. The key is to enjoy life, because
            they don’t want you to enjoy life
          </p>
        </div>

        <div class="arrow"></div>
      </div>
    </div>

    <div class="flex right flex-row-reverse">
      <img
        class="w-24 h-24 rounded-full"
        src="../../assets/images/user.svg"
        alt="user image"
      />
      <div class="relative bg-white h-32 w-4/12 rounded-lg mx-8 p-4">
         <div>
          <span class="text-3xl font-bold">"</span>

          <p class="inline text-sm">
            To succeed you must believe. When you believe, you will succeed. You
            smart, you loyal, you a genius. The key is to enjoy life, because
            they don’t want you to enjoy life
          </p>
        </div>
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.left .arrow {
  position: absolute;
  left: -0.8rem;
  bottom: 3rem;
  width: 0;
  height: 0;
  border-top: 0.8rem solid transparent;
  border-bottom: 0.8rem solid transparent;

  border-right: 0.8rem solid white;
}

.right .arrow {
  position: absolute;
  right: -0.8rem;
  bottom: 3rem;
  width: 0;
  height: 0;
  border-top: 0.8rem solid transparent;
  border-bottom: 0.8rem solid transparent;

  border-left: 0.8rem solid white;
}
</style>
