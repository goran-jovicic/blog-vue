import axios from 'axios'

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getPosts() {
        return axios.get('posts')
    }

    getSinglePost(id) {
        return axios.get('posts/' + id)
    }

    addPost(post) {
        axios.post(`posts`, post)
        .then(response=>{
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }
}

export const postService = new PostService() 
