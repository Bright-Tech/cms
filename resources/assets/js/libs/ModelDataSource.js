/**
 * Model 数据源
 * 用于 单条记录的增删查改
 */
(function (root, factory) {
  // CommonJS
  if (typeof exports === 'object') {
    module.exports = factory();
  }
  // Browser global
  else {
    root.ModelDataSource = factory();
  }

}(this, function () {
  let _ = require('lodash');
  let axios = require('axios');

  let defaultSettings = {
    url: '',
    dataKey: '',
    defaultAttributes: {},
  };

  function ModelDataSource(vm, settings) {
    this.vm = vm;
    this.settings = settings;
    this.errors = {};
    this.debug = true;
    // this.dataKey = settings.
    // this.defaultAttributes = settings.attributes;
    this.init();
  }

  ModelDataSource.prototype = {
    vm: null,
    settings: null,
    uuid: 0,
    init: function () {
      let self = this;
      _.assign(self, self.settings.attributes);
      _.assignInWith(self.errors, self.settings.attributes, () => {
        return ''
      });
    },


    /**
     * Fetch
     *
     * @param id
     * @param successCallback
     * @param failedCallback
     */
    fetch: function (uuid = 0, params = {}, successCallback = function () {
    }, failedCallback = function () {
    }) {
      let self = this;
      let url = self.settings.url;
      self.uuid = uuid;
      if (uuid == 0) {
        self.reset();
      } else {
        axios.get(url + '/' + uuid, {params: params}).then(function (response) {
          if (response.data.data) {
            for (let key in response.data.data) {
              self[key] = response.data.data[key];
            }
          } else {
            for (let key in response.data) {
              self[key] = response.data[key];
            }
          }

          successCallback();
        }).catch(function (error) {
          console.log(error);
          // if (error.response) {
          //   _.forEach(error.response.data, function (value, key) {
          //     self.vm.$set(self.vm[self.settings.dataKey].errors, key, value[0]);
          //     typeof value === 'object' && self.vm.$set(self.vm[self.settings.dataKey].errors, key, value[0]);
          //     typeof value === 'string' && self.vm.$set(self.vm[self.settings.dataKey].errors, key, value);
          //   });
          // }
          failedCallback();
        });
      }
    },

    /**
     * 保存model
     * @param successCallback
     * @param failedCallback
     */
    save: function (successCallback = function () {
    }, failedCallback = function () {
    }) {
      let self = this;
      let url = '';
      if (self.uuid == 0) {
        url = self.settings.url;
      } else {
        url = self.settings.url + '/' + self.uuid;
      }
      axios({
        method: self.uuid == 0 ? 'post' : 'put',
        url: url,
        data: _.omit(self, ['vm', 'settings', 'errors', 'debug'])
      }).then(function (response) {
        if (response.data.data) {
          for (let key in response.data.data) {
            self[key] = response.data.data[key];
          }
        } else {
          for (let key in response.data) {
            self[key] = response.data[key];
          }
        }
        successCallback();
      }).catch(function (error) {
        // if (error.response) {
        //   _.forEach(error.response.data, function (value, key) {
        //     typeof value === 'object' && self.vm.$set(self.vm[self.settings.dataKey].errors, key, value[0]);
        //     typeof value === 'string' && self.vm.$set(self.vm[self.settings.dataKey].errors, key, value);
        //   });
        // } else {
        //   // Something happened in setting up the request that triggered an Error
        //   self.debug && console.log(error);
        // }
        failedCallback();
      });
    },
    /**
     * 删除model
     * @param id
     */

    /**
     *
     * @param successCallback
     * @param failedCallback
     */
    destroy: function (successCallback = function () {
    }, failedCallback = function () {
    }) {
      let self = this;
      axios({
        method: 'delete',
        url: self.settings.url + '/' + self.uuid,
      }).then(function (response) {
        successCallback();
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        self.debug && console.log('Error', error.message);
        failedCallback();
      });
    },


    /**
     * 重置model 为默认值
     * @param id
     */
    reset: function () {
      let self = this;
      _.assign(self, self.settings.attributes);
      _.assignInWith(self.errors, self.settings.attributes, () => {
        return ''
      });
    },
  };


  /**
   * Vue Plugin
   */
  ModelDataSource.install = function (Vue) {
    Vue.prototype.$modelDataSource = function (options) {
      return new ModelDataSource(this, options);
    }
  };
  return ModelDataSource;
}));
