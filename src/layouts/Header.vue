<template>
  <header class="header">

    <div class="logo">
      <img src="/images/logo.png" alt="">
    </div>

    <small v-html="$static.metadata.siteDescription" />

    <HeaderNav/>
    
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import HeaderNav from '~/layouts/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style>
.header__innerbox h1 {
  font-size: 18px;
  margin: 0;
}

.post-outer {
  background-color: #fff;
  border-radius: .4em;
  padding: 1.5em;
  margin-bottom: 1em;
}

.post-content p img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

.back {
  background-color: #fff;
  border-radius: .4em;
  padding: 1em;
  margin-bottom: 1em;
}

.post-comment {
  background-color: #fff;
  border-radius: .4em;
  padding: 1em;
  margin-bottom: 1em;
}

.logo {
  width: 5em;
  height: 5em;
  display: block;
  margin: 2em auto 1em;
  overflow: hidden;
  border-radius: 100%;
}

.logo img {
  max-width: 100%;
}
</style>