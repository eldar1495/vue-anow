<template>
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </template>
  
  <script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  export default{
name:'Layout',
  components:{
    Header,
    Footer
  }
  }
  
  </script>
  
  <style>

  </style>
  