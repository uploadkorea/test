<template>
  <div>

    <!-- <h1 class="site-desc">{{ $static.metadata.siteDescription }}</h1> -->

    <div class="layout">
      
      <HeaderPartial/>

      <main>
        <slot/>
      </main>

      <FooterPartial/>

    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/Header.vue'
import FooterPartial from '~/layouts/Footer.vue'

export default {
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #eee;
}

code {
  border: 1px solid #ddd;
  background-color: #eee;
  padding: 0 .3em;
  border-radius: .3em;
}

a {
  text-decoration: none;
  color: #cc2a41;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
}

.layout iframe {
  border: 1px solid #ddd;
}

.site-desc {
  text-align: center;
}

.header {
  text-align: center;
}

.site__title,
.site__description {
  margin-bottom: 0;
}

.header__innerbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
}

.nav__link {
  /* margin-left: 20px; */
}
</style>
