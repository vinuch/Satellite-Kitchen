<template>
  <div class="sm:mx-32 px-4 my-32">
    <h3 class="text-primary text-sm text-center">Testimonial</h3>

    <h1 class="text-center text-3xl my-2 font-medium">
      What Our Customers are saying
    </h1>
    <p data-aos="fade-up" class="text-sm mx-auto text-center sm:w-6/12 mb-16">
      To succeed you must believe. When you believe, you will succeed. You
      smart, you loyal, you a genius. The key is to enjoy life, because they
      don’t want you to enjoy life
    </p>
    <div class="flex my-6 items-center static left">
      <img
        data-aos="zoom-in"
        data-aos-delay="700"
        class="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
        src="../../assets/images/user.svg"
        alt="user image"
      />
      <div data-aos="fade-left"
        data-aos-delay="900" class="relative bg-white h-100 w-64 ml-4 sm:w-4/12 rounded-lg sm:mx-8 p-4">
        <div>

          <p class="inline text-xs">
            To succeed you must believe. When you believe, you will succeed. You
            smart, you loyal, you a genius. The key is to enjoy life, because
            they don’t want you to enjoy life
          </p>
        </div>

        <div class="arrow"></div>
      </div>
    </div>

    <div class="flex right flex-row-reverse my-6 items-center static ">
      <img
        data-aos="zoom-in"
        data-aos-delay="700"
        class="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
        src="../../assets/images/user.svg"
        alt="user image"
      />
      <div data-aos="fade-left"
        data-aos-delay="900" class="relative bg-white h-100 w-64 mr-4 sm:w-4/12 rounded-lg sm:mx-8 p-4">
        <div>

          <p class="inline text-xs">
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
