<template>
    <Layout>
        <main class="news-page">
            <div class="main-container">
                <div class="titles">
                    <h4 class="title1">THE DAILY PLANET</h4>
                    <h2 class="title2">our interactive news</h2>
                </div>
                <div class="cards">
                    <div class="card" v-for="card in cards" >
                        <div class="card-image">
                            <img class="img-card" :src="card.imageCard" alt="">
                        </div>
                        <div class="titles-card">
                            <div class="title-up">
                                <p class="title-row">lifestyle</p>
                                <p class="title-row">design</p>
                                <p class="title-row1">March 11, 2022</p>
                            </div>
                            <p class="title-average">{{card.titleAverage}}</p>
                            <p class="title-down">{{card.titleDown}}</p>
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
    name:'News',
    components:{
        Layout
    },
    data(){
        return{
            cards:[
                {
                    imageCard:'src/icons/forest.png',
                    titleAverage:'insights from interviewing the community',
                    titleDown:'view more'
                },
                {
                    imageCard:'src/icons/girl.png',
                    titleAverage:'insights from interviewing the community',
                    titleDown:'view more'
                },
                {
                    imageCard:'src/icons/bike.png',
                    titleAverage:'insights from interviewing the community',
                    titleDown:'view more'
                },

            ]
        }
    }
  
  }
  
  </script>
  
  <style scoped>
.news-page{
    width: 100%;
}
.main-container{
    margin: 0 10%;
    display: flex;
    flex-direction: column;

}
.titles{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
}
.title1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #FD8558;
}
.title2{
    margin-top: 30px;
}
.cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom:60px;
    margin-top: 20px;
}
.card{
    display: flex;
    flex-direction: column;
    
}
.img-card{
    width: 300px;
}
.titles-card{
    display: flex;
    flex-direction: column;
}
.title-up{
    display: flex;
    flex-direction: row;
    grid-gap: 10px;
    margin-top: 30px;
}
.title-row{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 21px;
color: #FD8558;
}
.title-row1{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #999999;
}
.title-average{
    width: 85%;
}
.title-down{
margin-top: 30px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 21px;
color: #FD8558;
}
  </style>
  