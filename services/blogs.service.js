import api from './api'

class Blog {
  async getAllBlogs() {
    return await api.get('/blogs').then((response) => {
      return response.data
    })
  }

  async getSingleBlog(blogId) {
    return await api.get(`/blogs/${blogId}`).then((response)=>{
      return response.data
    })
  }
}

export default new Blog();
