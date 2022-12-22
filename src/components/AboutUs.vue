<template>
    <Layout>
    <main class="about-us">
        <div class="container">
          <div class="title-img">
            <img class="img-about" src="src/icons/about.png" alt="">
          </div>
          <div class="block1">
            <div class="left-block">
                <h4 class="title1">ABOUT US</h4>
                <h1 class="title2">Ultimate experiences with story, emotion and purpose</h1>
            </div>
            <div class="right-block">
                <div class="title-up">
                    <h4>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum</h4> 
                </div>
                <div class="title-down">
                    <p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Eros mus</p>
                </div>
            </div>
          </div>
          <div class="block2">
            <div class="left-block1">
                <img src="src/icons/IMAGE5.png" alt="">
            </div>
            <div class="right-block1">
                <h2 class="title3">“ Our mission is to produce the highest quality work for every clients, on every project with full of energy we have ”</h2>
                <h3 class="name">Frankie Kao</h3>
                <p class="title4">ART DIRECTOR PAO</p>
            </div>
          </div>
          <div class="block3">
            <div class="block3-1">
                <div class="img-block">
                <img class="img-logo1" src="src/icons/Frame2.png" alt="">
                </div>
                <h2 class="title-logo1">digital solutions</h2>
                <p class="text-logo">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
            </div>
            <div class="block3-2">
                <img class="img-logo2" src="src/icons/Frame3.png" alt="">
                <h2 class="title-logo2">creative strategy</h2>
                <p class="text-logo">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
            </div>
            <div class="block3-3">
                <img class="img-logo3" src="src/icons/Frame4.png" alt="">
                <h2 class="title-logo3">integrated marketing</h2>
                <p class="text-logo">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
            </div>
          </div>

        </div>
    </main>
    </Layout>
  </template>
  
<script>
  import Layout from './Layout.vue';
  export default{
    name:'AboutUs',
    components:{
        Layout
    },
    
  
  }
  
  </script>
  
<style scoped>
.about-us{
        width: 100%;
    }
    .container{
        width: 100%;
        height: 1443px;
    }
    .img-about{
        padding-top: 50px;
        padding-left: 30px;
    }
    .block1{
        margin: 0 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        grid-gap: 150px;
        margin-top: 50px;
    }
    .left-block{
        width: 30%;
    }
    .title1{
        font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 15px;
            letter-spacing: 2px;
        text-transform: uppercase;
    color: #FD8558;
    }
    .title2{
            margin-top: 30px;
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 54px;
    }
    
    .right-block{
        width: 45%;
    }
    .title-up{
        
    }
    .title-down{
        margin-top: 20px;
    }
    .block2{
        display: flex;
        flex-direction: row;
        margin: 0 15%;
        margin-top: 40px;
        grid-gap: 40px;
    }
    .left-block1{

    }
    .right-block1{
        width: 35%;
    }
    .name{
        margin-top: 90px ;
    }
    .title4{
        margin-top: 20px;
    }
    .block3{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 15%;
        margin-top: 100px;
        grid-gap: 30px;
    }
    .block3-1{
       display: flex;
       flex-direction: column;
       align-items: center;
    }
    .block3-2{
       display: flex;
       flex-direction: column;
       align-items: center;
    }
    .block3-3{
       display: flex;
       flex-direction: column;
       align-items: center;
    }
    .text-logo{
        margin-top: 20px;
        text-align: center;
    }
</style>
  