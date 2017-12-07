/**
 * Created by 都大爽 on 2017/11/20.
 */
export default {
  /**
   * 获取当前登录用户
   * @param cb
   */
  fetchUser (cb) {
    axios.get('/api/admin/profile', {params: {include: 'profile'}}).then(function (response) {
      console.log('Susscee:', response)
      cb(response.data.data)
    })
  },
  /**
   * 登录
   * @param loginAttempts
   * @param cb
   */
  login (loginAttempts, cb) {
    axios.post('/login', loginAttempts).then(response => {
      cb(response)
    })
  },
  logout (cb) {
    axios.post('/logout').then(response => {
      cb(response)
    })
  }
}