<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ `${post.title}` }}
        <router-link :to="postID(post)">View Post</router-link>
        <router-link :to="editPost(post)">Edit Post</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { postService } from "../services/PostService";

export default {
  data() {
    return {
      post: {
        id: "",
        title: "",
        text: ""
      },
      posts: []
    };
  },

  methods: {
    postID(post) {
      return `/post/${post.id}`;
    },

    editPost(post) {
      return `/edit/${post.id}`;
    }
  },

  created() {
    postService
      .getPosts()
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>
