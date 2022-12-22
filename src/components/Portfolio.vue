<template>
    <Layout>
        <main class="portfolio-page">
            <div class="main-container">
                <div class="block1">
                    <div class="left-block">
                        <h4 class="title1">latest works</h4>
                        <h2 class="title2">take a look around our portfolio.</h2>
                    </div>
                    <div class="right-block">
                        <div class="btn"><button class="button">View More</button></div>
                        <img src="/src/icons/works.png" alt="">
                    </div>
                </div>
                <div class="block2">
                    <div class="block2-1">
                        <div class="img1"></div>
                        <div class="img2"></div>
                    </div>
                    <div class="block2-2">
                        <div class="img3">
                            <div class="ram">
                                <h3 class="title3">Oblique House</h3>
                                <input class="checkbox" type="checkbox">
                            </div>
                        </div>
                    </div>
                    <div class="block2-3">
                        <div class="img4"></div>
                        <div class="img5"></div>
                    </div>
                </div>
                <div class="block3">
                    <div class="left">
                        <h4 class="title4">our skills</h4>
                        <h2 class="title5">modern digital creative agency</h2>
                        <p class="title6">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
                    </div>
                    <div class="right">
                        <h3 class="title-ilustr">illustration</h3>
                        <div class="ilustr">
                            <div class="orange"></div>
                        </div>
                        <h3 class="title-design">web design</h3>
                        <div class="design">
                            <div class="orange1"></div>
                        </div>
                        <h3 class="title-dev">development</h3>
                        <div class="dev">
                            <div class="orange2"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    </Layout>
  </template>
  
  <script>
import Layout from './Layout.vue';

  
  export default{
    name: "Portfolio",
    components: { Layout }
}
  
  </script>
  
  <style scoped>
  .main-container{
    display: flex;
    flex-direction: column;
    height: 1600px;
    width: 100%;
  }
.block1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 10px;
    margin-top: 70px;
}
.left-block{
    display: flex;
    flex-direction: column;
}
.title1{

}
.title2{
width: 60%;
}
.right-block{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
}
.button{
width: 156px;
height: 56px;
background-color: #FD8558;
border: none;
margin-left: 140px;
color: #fff;
}
.block2{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.block2-1{
    display: flex;
    flex-direction: column;
    width: 25%;
}
.img1{
    background-image: url(src/icons/Frame5.png);
    background-repeat: no-repeat;
    width: 360px;
    height: 360px;
    background-size: 100% 100%;
}
.img2{
    background-image: url(src/icons/Frame6.png);
    background-repeat: no-repeat;
    width: 100%;
    height: 360px;
    background-size: 100% 100%;
}
.block2-2{
    display: flex;
    flex-direction: column;
    width: 50%;
}

.img3{
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-image: url(src/icons/Frame7.png);
    background-repeat: no-repeat;
    width: 100%;
    height: 720px;
    background-size: 100% 100%;
}
.ram{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    grid-gap: 30px;
    width: 608px;
    height: 126px;
    background-color: rgba(255, 255, 255, .6);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
}
.title3{
    
}
.checkbox{
    width: 46px;
    height: 46px;
    background-color: #fff;
    border: 3px solid black;
   
}
.block2-3{
    display: flex;
    flex-direction: column;
    width: 25%;
}
.img4{
    background-image: url(src/icons/Frame8.png);
    background-repeat: no-repeat;
    width: 100%;
    height: 360px;
    background-size: 100% 100%;
}
.img5{
    background-image: url(src/icons/Frame5.png);
    background-repeat: no-repeat;
    width: 100%;
    height: 360px;
    background-size: 100% 100%;
}
.block3{
    display: flex;
    flex-direction: row;
    margin: 0 10%;
    margin-top: 100px;
    grid-gap: 150px;
}
.left{
    display: flex;
    flex-direction: column;
}
.title5{
    width: 75%;
}
.title6{
    margin-top: 20px;
    width: 60%;
}
.right{
display: flex;
flex-direction: column;
grid-gap: 30px;
}
.ilustr{
 width:500px;
 height: 10px;
 background-color: rgb(178,177, 177, 20%);
}
.orange{
width:440px;
 height: 10px;
 background-color: #FB7948;
}
.design{
 width:500px;
 height: 10px;
 background-color: rgb(178,177, 177, 20%);
}
.orange1{
width:380px;
 height: 10px;
 background-color: #FB7948;
}
.dev{
 width:500px;
 height: 10px;
 background-color: rgb(178,177, 177, 20%);
}
.orange2{
width:470px;
 height: 10px;
 background-color: #FB7948;
}

  </style>
  