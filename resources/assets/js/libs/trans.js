/**
 * Created by 都大爽 on 2017/11/28.
 */
export default {
  trans(type, index){
    return _.get(this, type + '.' + index)
  },
  content_picture: {
    point_type: {
      0: '无',
      1: '单页',
      2: '列表',
      3: '外链'
    }
  }
}