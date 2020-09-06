<template>
  <div class="home">
    <div>
      <NavBar />
      <Banner />
      <InfoBar />
      <About />
      <Menu />
      <CustomerReview />
      <Footer />
    </div>
  </div>
</template>

<script>
import Banner from '../components/landingPage/Banner'
import NavBar from '../components/landingPage/NavBar'
import InfoBar from '../components/landingPage/InfoBar'
import About from '../components/landingPage/About'
import Menu from '../components/landingPage/Menu'
import CustomerReview from '../components/landingPage/CustomerReview'
import Footer from '../components/landingPage/Footer'

export default {
  components: {
    Banner,
    NavBar,
    InfoBar,
    About,
    Menu,
    CustomerReview,
    Footer
  }
}
</script>

<style scoped>


/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.home{  
  background-size: 100rem ;
  background-repeat: no-repeat;
  background-position: right -44rem top -30rem;
  background-image: url('../assets/images/Ellipse.svg');

}

</style>
