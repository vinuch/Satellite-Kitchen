<template>
  <div class="home w-screen">
    <div>
      <NavBar />
      <Banner />
      <InfoBar />
    </div>
  </div>
</template>

<script>
import Banner from '../components/landingPage/Banner'
import NavBar from '../components/landingPage/NavBar'
import InfoBar from '../components/landingPage/InfoBar'
export default {
  components: {
    Banner,
    NavBar,
    InfoBar
  }
}
</script>

<style scoped>


/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.home{  background-size: 100rem ;
  background-repeat: no-repeat;
  background-position: right -42rem top -30rem;
  background-image: url('../assets/images/Ellipse.svg');

}

</style>
