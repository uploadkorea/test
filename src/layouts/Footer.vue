<template>
  <footer class="footer">
    <p>
      Build with <a href="https://gridsome.org/" target="_blank">Gridsome</a> & Made by minamiland.
    </p>
    <p>
      <a href="/sitemap.xml">Sitemap</a> | <a href="/feed.xml">RSS</a>
    </p>
  </footer>
</template>

<style>
.footer {
  display: flex;
  flex-direction: column;
  padding: 0 0 2em 0;
  font-size: 14px;
  color: #656c7a;
  text-align: center;
}

.footer a {
  color: #656c7a;
}

.footer a:hover,
.footer a:focus {
  text-decoration: underline;
}

.footer p {
  margin: 0;
}
</style>