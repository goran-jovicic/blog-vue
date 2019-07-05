<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ `${post.id} ${post.title} ${post.text}` }}
      </li>
    </ul>
  </div>
</template>

<script>
import { postService } from '../services/PostService'

export default {
  data () {
    return {
      post: {
        id : '',
        title : '',
        text : ''
      },
      posts : [],
    }
  },

  created () {
    postService.getPosts()
      .then(response => {
        this.posts = response.data
      }).catch(e => {
        console.log(e)
      })
  }
};
</script>

<style>
li {
  list-style: none
}
</style>
