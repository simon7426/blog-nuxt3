import api from './api'

class Blog {
  getAllBlogs() {
    return api.get('/blogs').then((response) => {
      return response.data
    })
  }
}

export default new Blog();
