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
        root.ListDataSource = factory();
    }

}
(this, function () {
    let _ = require('lodash');
    let axios = require('axios');
    // let defaultSettings = {
    //     url: '',
    //     dataKey: '',
    //     defaultAttributes: {},
    // };

    function ListDataSource(vm, settings) {
        this.vm = vm;
        this.settings = settings;
        this.debug = true;
        this.init();
    }

    ListDataSource.prototype = {
        vm: null,
        settings: null,
        id: 0,
        pageCount: 0,
        currentPage: 0,
        total: 0,
        /**
         *
         */
        init: function () {
            let self = this;
            self.items = [];
            _.assign(self, self.settings.attributes);
        },
        /**
         *
         * @param query
         * @param successCallback
         * @param failedCallback
         */
        fetch: function (params = {}, successCallback, failedCallback) {
            let self = this;
            let url = self.settings.url;
            axios.get(url, {params: params}).then(function (response) {
                self.items = [];
                _.forEach(response.data.data, function (value, key) {
                    self.items.push(value);
                });
                if (response.data.meta){
                    if (response.data.meta.pagination){
                      self.total = Number.parseInt(response.data.meta.pagination.total);
                      self.currentPage = Number.parseInt(response.data.meta.pagination.current_page);
                      self.pageCount = Number.parseInt(response.data.meta.pagination.total_pages);
                    }else{
                      self.total = Number.parseInt(response.data.meta.total);
                      self.currentPage = Number.parseInt(response.data.meta.current_page);
                      self.pageCount = Number.parseInt(response.data.meta.last_page);
                    }
                }else{
                  self.total = Number.parseInt(response.data.total);
                  self.currentPage = Number.parseInt(response.data.current_page);
                  self.pageCount = Number.parseInt(response.data.last_page);
                }

                typeof successCallback === 'function' && successCallback();
            }).catch(function (error) {
                // Something happened in setting up the request that triggered an Error
                self.debug && console.log('Error', error.message);
                typeof failedCallback === 'function' && failedCallback();
            });
        }


    };


    /**
     * Vue Plugin
     */
    ListDataSource.install = function (Vue) {
        Vue.prototype.$listDataSource = function (options) {
            return new ListDataSource(this, options);
        }
    };
    return ListDataSource;
}));
