<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>                
            </ion-toolbar>
            <ion-title>How Can We Help?</ion-title>
            <small>Choose the service you require below</small>
        </ion-header>

        <ion-content>
            <div class="boxes_area">
                <ion-card @click="$router.push('/customer/booking-form')">
                    <img src="@/assets/images/tow.png">
                    Towing
                </ion-card>
                <ion-card @click="$router.push('/customer/booking-form')">
                    <ion-icon :icon="constructOutline"></ion-icon>
                    Technician
                </ion-card>
                <ion-card @click="$router.push('/customer/booking-form')">
                    <ion-icon :icon="carOutline"></ion-icon>
                    Ride Sharer
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonTitle,
    IonPage,
    IonBackButton,
    IonHeader,
    IonButtons,
    IonToolbar,
    IonIcon,
    IonContent,
    IonCard,
} from '@ionic/vue';
import {    
    constructOutline,
    carOutline
} from 'ionicons/icons';



export default({
    components:{
        IonTitle,
        IonPage,
        IonHeader,
        IonBackButton,
        IonButtons,
        IonToolbar,
        IonIcon,
    IonContent,
    IonCard,
    },
    data(){
        return{
            constructOutline,
            carOutline
        }
    }
});
</script>

<style scoped src="@/assets/css/common.css"></style>
<style scoped>
.ion-page{min-height: 600px;}
ion-content{}
.boxes_area {display:flex;flex-wrap:wrap;justify-content:center}
.boxes_area ion-card {text-align: center;padding: 20px 0;color:#b7160b;width:40%;background:transparent;box-shadow:none;border:1px solid #fff;}
.boxes_area ion-card{color:#fff;font-size:16px}
.boxes_area ion-card img{height:50px;display:block;margin: 0 auto 10px;}
.boxes_area ion-card ion-icon{margin: 0 auto 10px;display: block;font-size: 50px;color: #fff;}
.boxes_area ion-card::after{content:"";background: rgba(227, 195, 192, 0.308);position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:0;height:0;border-radius:50%}
.boxes_area ion-card:active::after{width:300%;height:300%;transition: all linear 0.3s;}
</style>