<template>
  <div>
    <form @submit.prevent="handleForm">
      <div>
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          v-model="newPost.title"
          required
          pattern=".{2,}"
          title="minimum of 2 characters"
        />
      </div>
      <div>
        <label for="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="text"
          v-model="newPost.text"
          required
          pattern=".{2,300}"
          title="maximum of 300 characters allowed"
        />
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
    <button class="btn btn-primary" @click="handleReset">Reset</button>
  </div>
</template>

<script>
import { postService } from "../services/PostService";

export default {
  data() {
    return {
      id: "",
      newPost: {
        title: "",
        text: ""
      }
    };
  },

  methods: {
    handleForm() {
      if (this.id) {
        postService.editPost(this.newPost);
        this.$router.push("/posts");
        return;
      }
      postService.addPost(this.newPost);
      this.$router.push("/posts");
    },

    handleReset() {
      this.newPost = {
        title: "",
        text: ""
      };
    }
  },

  created() {
    this.id = this.$router.currentRoute.params.id;
    if (this.id) {
      postService
        .getSinglePost(this.id)
        .then(response => {
          this.newPost = response.data;
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
