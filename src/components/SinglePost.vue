<template>
  <div>
    <p>Title of post : {{ `${post.title} `}}</p>
    <p>Text of post : {{ `${post.text}` }}</p>
    <p>Created at : {{ formatDate(post.createdAt,'YYYY-MM-DD HH:mm:ss') }}</p>
    <div>
      <AddComment @addComment="handleComment" />
      <div>
        <p
          v-for="(comment, index) in post.comments"
          :key="index"
        >Comments on post : {{ `${comment.text}` }}
        Created at : {{ formatDate(comment.createdAt,'YYYY-MM-DD HH:mm:ss') }}
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
import { postService } from "../services/PostService";
import AddComment from "@/components/AddComment";
import { DateMixin } from "@/mixins/mixin.js";

export default {
  components: {
    AddComment
  },

  mixins : [DateMixin],

  data() {
    return {
      id: "",
      post: {
        title: "",
        text: "",
        comments: []
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
      postService
        .getSinglePost(id)
        .then(response => {
          this.post = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },

    handleComment(comment) {
      postService.addCommentOnPost(this.id, comment);
      this.post.comments.push(comment);
      console.log(comment);
    }
  }
};
</script>

<style>
</style>
