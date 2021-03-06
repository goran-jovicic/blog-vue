import axios from 'axios'

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getPosts() {
        return axios.get('posts')
    }

    getSinglePost(id) {
        return axios.get(`/posts/${id}?filter={"include":["comments"]}`)
    }

    addPost(post) {
        axios.post(`posts`, post)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    }

    editPost(newPost) {
        axios.put(`posts/${newPost.id}`, newPost)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    }

    deletePost(id) {
        return axios.delete(`posts/${id}`)
    }

    addCommentOnPost(postId, comment) {
        axios.post(`/posts/${postId}/comments`, comment)
    }
}

export const postService = new PostService() 
