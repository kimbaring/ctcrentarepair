<template>
<ion-page>
    <ion-content :fullscreen="true">
        <div class="mainlogo">
            <img src="../../img/headerlogo.png"/>
        </div>
        <h3>Hi Welcome</h3>
        <p>How we can help you today?</p>
        <div class="serv">
            <ion-card>
                    <ion-card-content>
                        <div class="services">
                        <ion-card @click="$router.push('/customer/dashboard/location')">
                            <ion-card-content>
                                <ion-icon :icon="constructOutline"></ion-icon>
                                Technician
                            </ion-card-content>
                        </ion-card>
                        <ion-card>
                            <ion-card-content>
                                <img src="../../img/towwhite.png">
                                Towing
                            </ion-card-content>
                        </ion-card>
                        <ion-card>
                            <ion-card-content>
                                <ion-icon :icon="carSportOutline"></ion-icon>
                                Ride Sharer
                            </ion-card-content>
                        </ion-card>
                        </div>
                    </ion-card-content>
            </ion-card>
        </div>
        <div class="announcement">
            <swiper>
                <swiper-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Announcement 1</ion-card-subtitle>
                            <ion-card-title>Todays Announcement</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </swiper-slide>
                <swiper-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Announcement 2</ion-card-subtitle>
                            <ion-card-title>Todays Announcement</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </swiper-slide>
                <swiper-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Announcement 3</ion-card-subtitle>
                            <ion-card-title>Todays Announcement</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </swiper-slide>
            </swiper>
        </div>
        <div class="announcement">
            <swiper>
                <swiper-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Advertisement 1</ion-card-subtitle>
                            <ion-card-title>Todays Announcement</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </swiper-slide>
                <swiper-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Advertisement 2</ion-card-subtitle>
                            <ion-card-title>Todays Announcement</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </swiper-slide>
                <swiper-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-subtitle>Advertisement 3</ion-card-subtitle>
                            <ion-card-title>Todays Announcement</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </swiper-slide>
            </swiper>
        </div>
    </ion-content>
</ion-page>
</template>


<script>
import { 
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon
} from '@ionic/vue';
import { 
    bookOutline,
    timeOutline,
    personCircleOutline,
    logOutOutline,
    carSportOutline,
    constructOutline
} from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

export default({
    name: "CustomerDashboard",
    components:{
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle,
        IonCardTitle,
        IonHeader,
        IonTitle,
        IonToolbar,
        Swiper,
        SwiperSlide,
        IonIcon
    },

    data(){
        return{
            //ionicons
            bookOutline,
            timeOutline,
            personCircleOutline,
            logOutOutline,
            carSportOutline,
            constructOutline
            //end of ionicons
        }
    }
});
</script>

<style scoped>
.mainlogo{
    background: var(--ion-color-danger-contrast);
    height: 150px;
    position: relative;
    top: 0;
}
.mainlogo img{
    display: block;
    margin: 0 auto;
    padding-top: 60px;
}
.mainlogo::before {
  content: "";
  position: absolute;
  top: 150px;
  background-color: #b7170b;
  height: 50px;
  width: 25px;
  border-top-left-radius: 25px;
  box-shadow: 0 -25px 0 0 #fff; /* This is where the magic happens! */
  z-index: -1;
}
.mainlogo::after{
    content: "";
    position: absolute;
    top: 150px;
    background-color: #b7170b;
    height: 50px;
    width: 25px;
    border-top-right-radius: 25px;
    box-shadow: 0 -25px 0 0 #fff;
    right: 0;
}
ion-content{
    --ion-background-color: var(--ion-color-content);
}
ion-content h3{
    padding-top: 20px;
}
.announcement h3{
    color: #fff;
}
ion-content h3{
    color: #fff;
    margin: 20px 20px 0px 20px;
}
ion-content p{
    color: rgb(199, 194, 194);
    margin: 0px 20px 20px 20px;
}
.announcement ion-card{
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    color: #000;
    border-radius: 20px;
}
.announcement ion-card-title{
    color: #000;
}
.announcement ion-card-subtitle{
    color: #000;
}
.serv ion-card{
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    color: #000;
    border-radius: 20px;
}
.serv ion-card-content{
    padding: 0;
}
.services{
    display: flex;
    text-align: center;
    color: #000;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    flex-wrap: wrap;
    justify-content: center;

}
.services ion-card-content{
    padding: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b7160b;
    color: #ffff;
}
.services ion-card:hover{
    background-color: #b7170b;
    opacity: 0.5;
}
.services ion-icon{
    display: block;
    text-align: center;
    font-size: 50px;
    color: #000;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
}
.services img{
    width: 69px;
    margin-bottom: 1px;
    display: block;
}
</style>
