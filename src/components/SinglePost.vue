<template>
  <div>
    <p>{{ `${post.title} `}}</p>
    <p>{{ `${post.text}` }}</p>
    <div>
    <AddComment @addComment="handleComment" />
      <div>
        <p v-for="(comment, index) in post.comments" :key="index"> {{ `${comment.text}` }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { postService } from "../services/PostService";
import AddComment from "@/components/AddComment";

export default {
  components: {
     AddComment 
  },

  data() {
    return {
      id: "",
      post: {
        title: "",
        text: "",
        comments: []
      },
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
      postService
        .getSinglePost(id)
        .then(response => {
          this.post = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },

    handleComment (comment) {
      postService.addCommentOnPost(this.id,comment)
      this.post.comments.push(comment)
      console.log(comment)
    }
  }
};
</script>

<style>
</style>
