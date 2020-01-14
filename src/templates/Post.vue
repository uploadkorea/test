<template>
  <Layout>

    <!-- <div class="back">
      <g-link to="/" class="link">  &larr; Go Back</g-link>
    </div> -->
    
    <div class="post-outer">

      <div class="post-title">
        <h1>{{$page.post.title}}</h1>
        
        <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
      </div>
      
      <div class="post-content">
        <section v-html="$page.post.content" />
      </div>

    </div>

    <div class="post-comment">
      <vue-disqus shortname="sapjil" :identifier="$page.post.title"></vue-disqus>
    </div>

  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>