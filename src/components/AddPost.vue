<template>
  <div>
    <form @submit.prevent="handleAdd">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="title" v-model="newPost.title" />
      </div>
      <div>
        <label for="text">Text:</label>
        <input type="text" id="text" name="text" placeholder="text" v-model="newPost.text" />
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { postService } from "../services/PostService";

export default {
  data() {
    return {
      newPost: {
        title: "",
        text: ""
      }
    };
  },

  methods: {
    handleAdd() {
      postService.addPost(this.newPost)
      this.$router.push('/posts')
    }
  }
};
</script>

<style>
</style>
