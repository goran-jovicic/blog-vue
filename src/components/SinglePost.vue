<template>
  <div>
    <p>{{ `${post.title} `}} </p>
    <p>{{ `${post.text}` }}</p>      
    </div>
</template>

<script>
import { postService } from "../services/PostService";

export default {
  data() {
    return {
      id: "",
      post: {
        title: "",
        text: ""
      }
    };
  },

  created() {
    this.id = this.$router.currentRoute.params.id;
    if (this.id) {
      this.getPost(this.id);
    }
  },

  methods: {
    getPost(id) {
        postService.getSinglePost(id)
        .then(response => {
          this.post = response.data
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
</style>
