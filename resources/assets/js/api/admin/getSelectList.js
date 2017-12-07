/**
 * Created by 都大爽 on 2017/11/25.
 */

export default {
  /**
   * 获取分类下拉列表
   * @param cb
   */
  getCategories (cb) {
    axios.get('/api/admin/category-select-data').then(response => cb(response.data.data))
  },
  getContentsByCategoryId (categoryId, cb) {
    axios.get('/api/admin/content-select-data/' + categoryId + '/blog').then(response => cb(response.data.data))
  },
  getNavigations (cb) {
    axios.get('/api/admin/navigation-select-data').then(response => cb(response.data.data))
  }
}