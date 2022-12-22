<template>
    <Layout>
        <main class="page-team">
            <div class="main-container">
                <div class="titles">
                    <h4 class="title1">our team</h4>
                    <h2 class="title2">meet our awesome team</h2>
                </div>
                <div class="team">
                    <div v-for="image in images" class="block-person">
                        <div class="img-block">
                            <img class="img-person" :src="image.linkImage" alt="">
                        </div>
                        <div class="titles1">
                            <h2 class="name-person">{{image.namePerson}}</h2>
                            <p class="position">{{image.position}}</p>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button class="button">Start work</button>
                </div>
            </div>
            <div class="dark-blue">
                <div class="titles2">
                <h1 class="title-blue">testimonials</h1>
                <p class="title-blue1">What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design. What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design.</p>
                </div>
                    <div class="img-block1">
                        <div class="img-ceo">
                        <img src="src/icons/ceo.png" alt="">
                    </div>
                    <div class="titles3">
                        <p class="title-blue2">Sophie Nguyen</p>
                        <p class="title-blue3">CEO</p>
                    </div>
                    </div>
                </div>
        </main>
    </Layout>
  </template>
  
  <script>
import Layout from './Layout.vue';

  
  export default{
    name: "Team",
    components: { Layout },
    data(){
        return{
            images:[
                {
                    linkImage:'src/icons/img1.png',
                    namePerson:'Anna Brown',
                    position:'Creative Director'
                },
                {
                    linkImage:'src/icons/img2.png',
                    namePerson:'Andy Crown',
                    position:'SEO manager'
                },
                {
                    linkImage:'src/icons/img3.png',
                    namePerson:'Katy Necker',
                    position:'Designer'
                },
                {
                    linkImage:'src/icons/img4.png',
                    namePerson:'Margo Kesslin',
                    position:'Developer'
                },
                {
                    linkImage:'src/icons/img5.png',
                    namePerson:'Kanye Jones',
                    position:'Art Director'
                },
                {
                    linkImage:'src/icons/img6.png',
                    namePerson:'Marta White',
                    position:'Tester'
                },
            ]
        }
    }
}
  
  </script>
  
  <style scoped>
.page-team{
    width: 100%;
}
.main-container{
    margin: 0 15%;
    display: flex;
    flex-direction: column;
}
.titles{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.title1{
margin-top: 20px;
}
.title2{
margin-top: 20px;
}
.team{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 20px;
    margin-top: 30px;
    margin-bottom: 60px;
}
.img-person{
    position: relative;
    width: 250px;
}

.block-person {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.titles1{
    position: absolute;
    color: #fff;
}
.btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 80px;
}
.button{
    width: 158px;
    height: 56px;
    background-color:#FD8558 ;
    border: none;
    color: #fff;
}
.dark-blue{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 760px;
    background-color: #3A0F73;
}
.title-blue{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 200px;
line-height: 220px;
color: rgba(170, 170, 170, 0.1);
text-align: center;
}
.titles2{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
.title-blue1{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
color: #fff;
width: 50%;
margin-top: 40px;
text-align: center;
}
.title-blue2{
    
}
.img-block1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
}
.titles3{
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-top: 20px;
}
  </style>
  