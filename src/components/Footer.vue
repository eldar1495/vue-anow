<template>
    <footer class="page-footer">
        <main class="container">
        <div class="block1">
            <div class="logo-block">
            <img class="logo-image" :src="image" alt="">
        </div>
            <p class="contacts">+ (0712) 819 79 555 | M: info@example.com</p>
        </div>
        <div class="block2">
            <h3 class="title">Home</h3>
            <a v-for="home in homes" class="title-block2">{{home}}</a>
        </div>
        <div class="block3">
            <h3 class="title">Portfolio</h3>
            <a v-for="home in ports" class="title-block3">{{home}}</a>
        </div>
        <div class="block4">
            <h3 class="title">Blogs</h3>
            <a v-for="home in blogs" class="title-block4">{{home}}</a>
        </div>
    </main>
    <div class="down-block">
        <p class="down-title">© Anow. All Rights Reserved 2022 — Designed by 128.digital. Powered by Webflow</p>
    </div>
</footer>
  </template>
  
  <script>
  
  export default{
    name:'Footer',
    data(){
        return{
            image:'src/icons/anow1.png',
            homes:['Home Portfolio','Home Agency','Home Architecture'],
            ports:['Masonry Portfolio','Grid Portfolio','Metro Portfolio','Service Details'],
            blogs:['Blog Style 1','Blog Style 2','Blog Style 3','Licensing']
                   
        }
    }
  
  }
  
  </script>
  
  <style scoped>
 .page-footer{
    width: 100%;
    height: 447px;
    background-color: black;
 }
 .container{
    display: flex;
    flex-direction: row;
    margin: 0 10%;
    height: 70%;
 }
 .block1{
    display: flex;
    flex-direction: column;
    width: 40%;
    grid-gap: 20px;
    justify-content: center;
    height: 70%;
 }
 .contacts{
    color: #fff;
 }
 .block2{
width: 20%;
display: flex;
flex-direction: column;
grid-gap:20px ;
justify-content: center;
height: 90%;
 }
 .block3{
width: 20%;
display: flex;
flex-direction: column;
grid-gap:20px ;
justify-content: center;
 }
 .block4{
width: 20%;
display: flex;
flex-direction: column;
grid-gap:20px ;
justify-content: center;
 }
 .title-block2{
    text-decoration: none;
    color: rgb(255, 255, 255);
 }
 .title-block3{
    text-decoration: none;
    color: rgb(255, 255, 255);
 }
 .title-block4{
    text-decoration: none;
    color: rgb(255, 255, 255);
 }
 .title{
    color: #fff;
 }
 .down-block{
margin-top: 30px;
 }
 .down-title{
color: #fff;
text-align: center;
 }
 
  </style>
  