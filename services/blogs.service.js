import api from './api'

class Blog {
  getAllBlogs() {
    return api.get('/blogs').then((response) => {
      return response.data
    })
  }

  getSingleBlog(blogId) {
    return api.get(`/blogs/${blogId}`).then((response)=>{
      return response.data
    })
  }
}

export default new Blog();
