<template>
  <div class="wrap">
    <div class="header">
      <h1>
        <router-link to="/">Portfolio</router-link>
      </h1>
      <ul class="menu">
        <li>
          <router-link to="/#about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/#skills">SKILLS</router-link>
        </li>
        <li>
          <router-link to="/#webworks">WEB WORKS</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="footer">
      <p>© Claire Chang 2020 All Rights Reserved.</p>
      <!-- <div class="go-top">
        <i class="fas fa-arrow-up"></i>
        <div>
          <p>back to top</p>
          <p>back to top</p>
        </div>
      </div> -->
      <ul class="info">
        <li><p>Contact _</p></li>
        <li>
          <a href="mailto:a115487@hotmail.com">
            <i class="far fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/claire0609e29c" target="_blank">
            <i class="fab fa-behance"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/all.sass'
</style>
