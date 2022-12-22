<template>
    <Layout>
    <main class="demos">
        <div class="container">
            <div class="img1">
                <div class="title-block">
                <h1 class="title1">design is thinking
                made visual</h1>
            </div>
            <div class="buttons">
                <button class="button1">Start Now</button>
                <button class="button2">See more</button>
            </div>
            </div>
        </div>
    </main>
    </Layout>
  </template>
  
  <script>
  import Layout from './Layout.vue';
  export default{
    name:'Demos',
    components:{
        Layout
    },
    
  
  }
  
  </script>
  
  <style scoped>
    .demos{
        width: 100%;
    }
    .container{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 694px;
        background-image: url(src/icons/fon.png);
    }
    .img1{
        width: 600px;
        height: 498px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 30px;
        background-image:url(src/icons/Frame.png) ;
        background-repeat: no-repeat;
        grid-gap:30px;
    }
    .title-block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title1{
        text-align: center;
        color: #fff;
        font-style: normal;
        font-weight: 400;
        font-size: 70px;
        line-height: 85px;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        grid-gap: 20px;
    }
    .button1{
        width: 154px;
        height: 54px;
        background-color: #FD8558;
        color: #fff;
    }
    .button2{
        width: 154px;
        height: 54px;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid #FD8558;
        color: rgb(250, 249, 249);
    }
    
  </style>
  