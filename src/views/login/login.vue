<template>
  <div class="contain">
    <div class="logintop"></div>

    <div class="loginbody">
      <div class="logindiv">
        <div class="loginform">
          <ul>
            <li>
              <input type="text" class="loginuser" placeholder="请输入用户名" v-model="name"/>
            </li>
            <li>
              <input type="password" class="loginpwd" placeholder="请输入密码" v-model="password"/>
            </li>
            <li>
              <button class="loginbtn" @click="loginClick">登录</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="loginbottom">
      Copyright by Lin
    </div>
  </div>
</template>

<script>

  import {login} from "../../network/user";

  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      loginClick() {
        login(this.name, this.password).then(res => {
          // * 存储token
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId', res.data.userId);
          localStorage.setItem('isAdmin', res.data.isAdmin);
          this.$store.commit('setState2', [`${this.spm}Content`, 'isShow', false])
          this.$store.commit('addUserName', res.data.user.name)
          this.$store.commit('changeIsAdmin', res.data.isAdmin)
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.$router.push({path: this.$route.query.redirect || '/home',})
        })
      }
    }
  }
</script>

<style scoped>

  @import "~assets/css/login.css";

  #login {
    width: 100%;
    height: 100%;
  }
</style>
