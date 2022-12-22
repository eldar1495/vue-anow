<template>
    <header class="page-header">
        <div class="logo">
            <img class="logo-image" :src="image" alt="">
        </div>
        <div class="menu">
            <router-link v-for="title in titles" :to="title.link" class="title-menu">{{title.name}}</router-link>
        </div>
    </header>
  </template>
  
  <script>
  
  export default{
    name:'Home',
    data(){
        return{
            image:'src/icons/anow.png',
            titles:[
                {
                    name:'demos',
                    link:'/demos'
                },
                {
                    name:'about us',
                    link:'/about'
                },
                {
                    name:'portfolio',
                    link:'/portfolio'
                },
                {
                    name:'team',
                    link:'/team'
                },
                {
                    name:'news',
                    link:'/news'
                },
                {
                    name:'contact',
                    link:'/contact'
                },
                {
                    name:'other pages',
                    link:'/other'
                },
            ]
        }
    }
  
  }
  
  </script>
  
  <style scoped>
 .page-header{
    display: flex;
    flex-direction: row;
    height: 74px;
    border-bottom: 2px solid black;
    margin-top: 20px;
    padding-left: 40px;
 }
 .logo{
    width: 30%;
 }
 .menu{
width: 70%;
display: flex;
flex-direction: row;
grid-gap:30px ;
 }
 .title-menu{
    text-decoration: none;
    color: black;
 }
 .title-menu:hover{
    color: rgb(229, 174, 72);
 }
  </style>
  