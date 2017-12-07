<template>
    <div class="login">

        <div class="header container-fluid">
            <img class="align-self-center" src="../../../images/logo.png"   alt="logo"/>
            <a class="align-self-center" href="">首页</a>
        </div>
        <div class="content mt-auto container mb-auto mt-auto">
            <div class="content-name">
                <div class="content-title">崇光科技</div>
                <div class="content-p pt-2">内容管理系统</div>
            </div>
            <div class="login-content">
                <Card :bordered="false" class="login-card">
                    <p slot="title">
                        欢迎登录
                    </p>
                    <p slot="title">
                        输入任意用户名和密码即可登录
                    </p>
                    <div class="form-con">
                        <i-form ref="model" :model="model" :rules="ruleValidate">
                            <Form-item prop="username">
                                <i-input type="text" v-model="model.username" placeholder="请输入用户名" >
                                </i-input>
                            </Form-item>
                            <Form-item prop="password">
                                <i-input type="password" v-model="model.password" placeholder="请输入密码" @on-enter="login">
                                </i-input>
                            </Form-item>
                            <i-button type="ghost" long @click="login" :loading="isLoading">登录</i-button>
                        </i-form>
                        <div class="extra-a">
                            <a  href="">忘记密码</a>
                            <a href="">免费注册</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <!--<div id="particles"></div>-->

        <div class="footer  container-fluid">
            <span class=" container">
                Copyright 天津崇光科技有限公司 © 2014-2017
            </span>
        </div>
    </div>
</template>
<script>
  import Util from '../../libs/util'
  import authApi from '../../api/auth/auth'
  export default {
    data: function () {
      return {
        dialogVisible: true,
        isLoading: false,
        model: {
          username: '',
          password: ''
        },
        ruleValidate: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      login(){
        let self = this;
        self.$refs['model'].validate((valid) => {
          if (valid) {
            console.log('表单验证通过')
            self.isLoading = true;
            authApi.login({
              username: self.model.username,
              password: self.model.password
            }, () => {
              authApi.fetchUser(user => {
                let authRedirectUrl = Util.getAuthRedirect()
                self.isLoading = false;
                Util.login(user);
                self.$router.push({
                  path: authRedirectUrl
                });
              })
            })
          } else {
            console.log('表单验证失败')
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    /*#particles {*/
        /*position: absolute;*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/
    .login {
        display: flex;
        flex-direction: column;
        width: 100%;
        height:100%;
        background-image: url('~assets/images/login-bg.jpg');
        background-size: cover;
        background-position: center;
        .header{
            height: 60px;
            display: flex;
            align-self: flex-start;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            img{
                margin-left: 15px;
                height: 34px;
            }
            a{
                font-size: 14px;
                margin-right: 25px;
                color:#fff;
                text-decoration: none;
            }
        }
        .content {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            /*min-height: 580px;*/
            height:100%;
            .content-name {
                position: relative;
                display: flex;
                color: #fff;
                flex-direction: column;
                top: -30px;
                .content-title {
                    font-size: 45px;
                }
                .content-p {
                    font-size: 20px;
                }
            }
            .login-content {
                position: relative;
                z-index: 2;
                bottom: -203px;
                transform: translateY(-60%);
                width: 380px;
                .login-header {
                    font-size: 16px;
                    font-weight: 300;
                    padding: 30px 0;
                }
                .form-con {
                    padding: 10px 0 0;
                    .extra-a {
                        display: flex;
                        justify-content: flex-end;
                        a {
                            text-decoration: none;
                            margin: 0.75rem 0.5rem 0.5rem 0.5rem ;
                        }
                    }
                }
            }
        }
        .footer{
            position: relative;
            background: rgba(0, 0, 0, 0.5);
            padding: 1rem 0;
            font-size: 14px;
            color: #fff;
            text-align: center;
        }
    }


    .login-card{
        border-radius: 0;
        border-top: 5px solid #1ab394;
        &:hover{
            border-top: 5px solid #1ab394;
        }
        >:first-child{
            padding: 20px 25px 0 25px;
            border: none;
            P{
                font-weight: 500;
                font-size: 20px;
                color: black;
                margin-top: 0.25rem;
                margin-bottom: 0;
                height: 21px;
                &:last-child{
                    font-size: 16px;
                    color: #7f7f7f;
                    margin-top: 1.25rem;
                    margin-bottom: 0;
                }
            }
        }
        >:last-child{
            padding: 16px 25px;
            input{
                border-radius: 0px;
                color: #b2b2b2;
                border: 1px solid #dfdfdf;
                height: 40px;
                width: 330px;
            }

            button{
                font-size: 15px;
                color: #fff;
                height: 40px;
                border:none;
                padding: 0;
                border-radius: 0;
                background: #1ab394;
                &:hover{
                    background: #08977a;
                    border:none;
                }
            }
        }
    }
    </style>