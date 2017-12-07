<template>
    <div class="text-editor-container">
        <div id="summernote"></div>
    </div>
</template>
<script>
  /**
   * summernote code-view
   */
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/monokai.css');
  require('codemirror/lib/codemirror.js');
  require('codemirror/mode/xml/xml.js');

  require('jquery/dist/jquery.slim.min');
  //  require('popper.js/dist/umd/popper.min');
  require('bootstrap/dist/js/bootstrap.min');
  require('summernote/dist/summernote-bs4.css');
  require('summernote/dist/summernote-bs4.min');
  require('summernote/lang/summernote-zh-CN');

  import ImagePicker from './imagePicker.vue';
  export default {
    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    },
    components: {
      ImagePicker
    },
    data () {
      return {
        insertImageButton: () => {
          let ui = $.summernote.ui;
          let self = this;
          let button = ui.button({
            contents: '<i class="note-icon-picture">',
            tooltip: '插入图片',
            click: () => {
              self.$Modal.confirm({
                title: '请选择图片',
                width: '700px',
                render: (h) => {
                  return h(
                    'div',
                    [
                      h('hr'),
                      h(ImagePicker, {
                        on: {
                          'on-selected': self.chosePicture,
                          'upload-new-image': self.uploadNewImage
                        }
                      })
                    ]
                  )
                },
                onOk: () => {
                  if (self.currentUrl !== '') {
                    self.insertImage(self.imgBaseUrl + self.currentUrl, self.currentName);
                  } else {
                    self.$Notice.error({
                      title: '未选择图片'
                    })
                  }
                },
                onCancel: () => {
                  self.currentUrl = '';
                  self.currentName = '';
                  self.currentId = 0;
                }
              })
            }
          });

          return button.render()
        },
        keyword: '',
        uploadHeaders: window.uploadHeaders,
        currentUrl: '',
        currentName: '',
        currentId: 0
      }
    },
    methods: {
      updateValue (value) {
        this.$emit('input', value);
      },
      uploadNewImage (assets) {
        this.insertImage(this.imgBaseUrl + assets.path, assets.name);
        this.$Modal.remove();
      },
      chosePicture ({currentUrl, currentName, currentId}) {
        console.log(currentUrl);
        this.currentUrl = currentUrl;
        this.currentId = currentId;
        this.currentName = currentName;
      },
      insertImage (url, name = '') {
        console.log('insertImage', url);
        $('#summernote').summernote('insertImage', url, name);
        this.currentUrl = '';
        this.currentName = '';
        this.currentId = 0;
      }
    },
    computed: {
      imgBaseUrl(){
        return window.Laravel.imgBaseUrl;
      }
    },
    mounted () {
      let control = $('#summernote')
      let self = this
      control.summernote({
        height: 300,
        codemirror: {
          mode: 'text/html',
          htmlMode: true,
          lineNumbers: true,
          theme: 'monokai'
        },
        lang: 'zh-CN',
        placeholder: 'Hello bootstrap 4',
        toolbar: [
          ['misc', ['style', 'undo', 'redo', 'help']],
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough', 'superscript', 'subscript']],
          ['fontname', ['fontname']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']],
          ['insert', ['table', 'hr']],
          ['mybutton', ['image']]
        ],
        buttons: {
          image: self.insertImageButton
        },
        callbacks: {
          onInit: function () {
            control.summernote('code', self.value)
          },
          onFocus: function () {
            //
          },
          onBlur: function () {
            //
          },
          onChange: function (contents) {
            console.log(contents)
            self.updateValue(contents)
          }
        }
      })
    },
    beforeDestroy () {
      $('#summernote').summernote('destroy')
    }
  }
</script>

<style scoped lang="scss">
    .text-editor-container {
        width: 100%;
        font-size: 13px;
    }
</style>