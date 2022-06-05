import api from './api'

class Comment {
  async addAComment(blogId, email, displayName, body) {
    return await api
      .post(`/blogs/${blogId}/comments`, {
        email,
        display_name: displayName,
        body,
      })
      .then((response) => {
        return response.data
      })
  }
}

export default new Comment()
