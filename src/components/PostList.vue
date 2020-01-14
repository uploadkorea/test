<template>
  <div class="post-list">
    <!-- <hr class="line"> -->
    <div class="date" v-html="post.date"/>
    <!-- <h3 class="title" v-html="post.title"/> -->
    <h3 class="title">
      <g-link :to="post.path" class="read">{{ post.title }}</g-link>
    </h3>
    <p class="description" v-html="post.description"/>
    <span class="read-time">{{post.timeToRead}} min read</span>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>

.post-list {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: .4em;
  margin: 1em 0;
  padding: 1.5em;
}

.post-list:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
}

.post-list .title {
  font-size: 1.5em;
}

.read-time {
  /* font-size: .8em; */
  color: #666;
}
</style>