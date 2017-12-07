/**
 * Created by 都大爽 on 2017/11/28.
 */
export default {
  getAssetsList (params = {}, cb) {
    axios.get('/api/admin/asset', {params: params}).then(response => {
      cb(response.data)
    })
  }
}