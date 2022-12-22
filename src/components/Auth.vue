<template>
  <main class="main-page">
    <div class="container">
        <div class="logo-block">
            <img class="img-logo" :src="image" alt="">
        </div>
        <div class="auth-block">
            <h1 class="title-auth">Log in</h1>
        <div class="two-input">
            <label class="label-login" for="login">Login<input v-model="login" id="login" class="input-login" type="text" placeholder="Login"></label>
            <label class="label-pass" for="pass">Password<input v-model="pass" id="pass" class="input-pass" type="password" placeholder="Password"></label>
        </div>
        <div class="btn">
        <button @click="logIn()" class="button">Login</button>
    </div>
    </div>
    </div>
  </main>
</template>

<script>

export default{
  name:'Auth',
  components:{

  },
  data(){
    return{
        image:'src/icons/anow.png',
        login:'',
        pass:''
    }
  },
  methods:{
    logIn(){
        if(this.login==='admin'&& this.pass==='1234'){
            this.$router.push('/demos')
        }
        else{
            alert('Не успешно!')
        }
    }
  }
}

</script>

<style scoped>
.main-page{
    width: 100%;
    height: 100vh;
    background-color: rgb(223, 221, 221);
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 30px;
    position: fixed;
    top: 10%;
    bottom: 10%;
    left: 15%;
    right: 15%;
    background-color: #fff;
    padding-top: 60px;
}
.logo-block{

}
.img-logo{
    width: 100px;
}
.auth-block{
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
}
.title-auth{
    text-align: center;
    font-size: 20px;
}
.two-input{
    display: flex;
    flex-direction: column;
}
.label-login,.label-pass{
    display: block;
}
.input-login,.input-pass{
    display: block;
}
.label-pass{
    margin-top: 20px;
}
.btn{
    text-align: center;
}
.button{
    width: 60px;
}
</style>
