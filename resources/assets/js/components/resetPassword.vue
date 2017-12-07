<template>
    <div>
        <i-form ref='model' :model="model" :rules="validateRules">
            <Form-item label="密码" prop="password">
                <i-input v-model="model.newPassword" placeholder="请输入新密码" type="password"></i-input>
            </Form-item>
        </i-form>
    </div>
</template>
<script>
  export default {
    props: {
    },
    data () {
      const validatePassword = (rule, value, callback) => {
        console.log(value)
        if (value.length < 6 || value.length > 25) {
          callback(new Error('密码长度应该在6到25之间'))
        } else {
          callback()
        }
      }
      return {
        model: {
          newPassword: ''
        },
        validateRules: {
          password: [
            {required:true},
            {validatePassword}
          ]
        }
      }
    }
  }
</script>

