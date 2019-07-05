<template>
  <div>
    <label>Input comment</label>
    <input
      type="text"
      id="text"
      name="text"
      placeholder="Your comment here"
      v-model="comment.text"
      required
    />
    <button @click="newComment">Submit comment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        text: ""
      }
    };
  },
  methods: {
    newComment() {
      this.$emit("addComment", this.comment);
    }
  }
};
</script>

<style>
</style>
