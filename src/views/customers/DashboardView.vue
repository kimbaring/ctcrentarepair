<template>
<ion-page>
    <div class="top_area">
        <figure><ion-img src="@"></ion-img><figcaption>JD</figcaption></figure>
        <h2>John Doe</h2>
        <small>Customer</small>
    </div>
    <div class="boxes_area">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-card @click="$router.push('/customer/car-location')">
                        <ion-icon :icon="bookOutline"></ion-icon>
                        <ion-label>Book A Service</ion-label>
                    </ion-card>
                </ion-col>
                <ion-col>
                    <ion-card @click="$router.push('/customer/car-location')">
                        <ion-icon :icon="timeOutline"></ion-icon>
                        <ion-label>View History</ion-label>
                    </ion-card>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-card @click="$router.push('/customer/car-location')">
                        <ion-icon :icon="personCircleOutline"></ion-icon>
                        <ion-label>View Profile</ion-label>
                    </ion-card>
                </ion-col>
                <ion-col>
                    <ion-card @click="$router.push('/customer/car-location')">
                        <ion-icon :icon="logOutOutline"></ion-icon>
                        <ion-label>Log out</ion-label>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>

    </div>

</ion-page>
</template>


<script>
import { 
    IonPage,
    IonImg,
    IonCard,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
} from '@ionic/vue';
import { 
    bookOutline,
    timeOutline,
    personCircleOutline,
    logOutOutline
} from 'ionicons/icons';

export default({
    components:{
        IonPage,
        IonImg,
        IonCard,
        IonLabel,
        IonGrid,
        IonRow,
        IonCol,
        IonIcon
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
.ion-page{background: url(@/assets/images/splash-bkg.jpg);background-size: cover;background-position: bottom;color: #333;min-height: 600px;}
.top_area{margin: 50px auto 0;}
.top_area figure{border-radius: 50%;overflow: hidden;background: #b7160b;width: 150px;position: relative;}
.top_area figure figcaption{position: absolute;top: 50%;left: 50%;color: #fff;font-size: 45px;transform: translateY(-50%) translateX(-50%);z-index: 1;}
.top_area figure ion-img{position:relative;z-index: 2;}
.top_area h2{font-size: 30px;text-align: center;line-height: 30px;color:#b7160b}
.top_area small{text-align: center;font-size: 16px;display: block;}
.boxes_area{margin:0 0 50px;}
.boxes_area ion-card {text-align: center;padding: 20px 0;color:#b7160b}
.boxes_area ion-card ion-icon{margin: 0 auto;display: block;font-size: 50px;color: #b7160b;}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .boxes_area ion-card::after{content:"";background: #b7160b3f;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:0;height:0;border-radius:50%}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .boxes_area ion-card:active::after{width:300%;height:300%;transition: all 0.4s;}
</style>
