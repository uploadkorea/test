<template>
  <Layout>
    
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      <div class="pagenav">
        <Pager :info="$page.allPost.pageInfo"/>
      </div>
    </section>

  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
import { Pager } from "gridsome";

export default {
  components: {
    PostList,
    Pager
  },
  metaInfo: {
    title: "웹 사이트 제작에 필요한, 삽질을 줄일 수 있는 정보를 공유하고자 합니다."
  }
};
</script>

<page-query>
query Posts ($page: Int) {
  allPost(perPage: 5, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<style>
.pagenav {
  margin-bottom: 1em;
  text-align: center;
}
.pagenav a {
  width: 1.5em;
  display: inline-block;
  padding: .2em;
  background-color: #fff;
  margin: 0 .2em;
  border-radius: .4em;
}

.pagenav .active {
  color: #fff;
  background-color: #222;
}
</style>