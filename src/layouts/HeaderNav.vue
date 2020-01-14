<template>
  <div class="header__innerbox">
    <strong>
      <!-- <g-link class="nav__link" to="/">Home</g-link> -->
      <h1><g-link to="/">{{ $static.metadata.siteName }}</g-link></h1>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/about/">About</g-link>
    </nav>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
