<template>
    <Layout>
        <main class="page-contact">
            <div class="main-container">
                <div class="blocks">
                <div class="left-block">
                    <div class="address">
                        <p class="title1">address</p>
                        <p class="title2">14 tottenham road,london, england</p>
                    </div>
                    <div class="info">
                        <p class="title3">information</p>
                        <p class="title4">info@yourdomain.com (+68) 12004509</p>
                    </div>
                </div>
                <div class="right-block">
                    <div class="two-input">
                        <input class="input1" type="text" placeholder="Your name*">
                        <input class="input2" type="text" placeholder="Your e-mail*">
                    </div>
                    <div class="one-input">
                        <input class="input3" type="text" placeholder="Your message*">
                    </div>
                </div>
            </div>
                <div class="btn">
                    <button class="button">Send Message</button>
                </div>
            </div>
        </main>
    </Layout>
  </template>
  
  <script>
import Layout from './Layout.vue';

  
  export default{
    name: "app",
    components: { Layout }
}
  
  </script>
  
  <style scoped>
    .page-contact{
        width: 100%;
        height: 420px;
    }
    .main-container{
       margin: 0 10%;
    }
    .blocks{
        display: flex;
        flex-direction: row;
        justify-content: center;
        grid-gap: 90px;
        margin-top: 40px;
    }
    .left-block{
        display: flex;
        flex-direction: column;
        grid-gap: 40px;
    }
    .address{
        display: flex;
        flex-direction: column;
    }
    .title1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(34, 34, 34, 0.4);
    }
    .title2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
    }
    .info{
        display: flex;
        flex-direction: column;
    }
    .title3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(34, 34, 34, 0.4);
    }
    .title4{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
    }
    .right-block{
        display: flex;
        flex-direction: column;
        grid-gap:20px
    }
    .two-input{
        display: flex;
        flex-direction: row;
        grid-gap: 20px;
    }
    .input1{
        width: 310px;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE; 
        padding-top: 5px;
        padding-left: 15px; 
    }
    .input2{
        width: 310px;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;  
        padding-top: 5px;
        padding-left: 15px; 
    }
    .one-input{
        
    }
    .input3{
        width: 650px;
        height: 128px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        padding-left: 15px; 
        padding-left: 15px; 
}
    .btn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 100px;
    }
    .button{
        width: 192px;
        height: 56px;
        background-color: #FD8558;
        color: #EEEEEE;
        border: none;
    }
  </style>
  