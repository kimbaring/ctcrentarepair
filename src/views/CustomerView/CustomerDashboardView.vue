<template>
<ion-page>
    <ion-header collapse="fade">
        <ion-toolbar>
            <ion-title><img src="../../img/headerlogo.png"/></ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <h3>Hi Welcome</h3>
        <p>How we can help you today?</p>
        <div class="serv">
            <ion-card>
                <ion-card-content>
                    awdawdawdawdawd
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
        <div class="">

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
    IonToolbar
} from '@ionic/vue';
import { 
    bookOutline,
    timeOutline,
    personCircleOutline,
    logOutOutline,
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
    },

    data(){
        return{
            //ionicons
            bookOutline,
            timeOutline,
            personCircleOutline,
            logOutOutline
            //end of ionicons
        }
    }
});
</script>

<style scoped>
ion-header{
    text-align: center;
}
ion-content{
    --ion-background-color: var(--ion-color-content);
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
    min-height: 400px
}
</style>
