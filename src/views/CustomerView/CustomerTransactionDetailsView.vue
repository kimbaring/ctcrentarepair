<template>
<ion-page>
    <ion-content>
        <div class="section">
            <h3>Transaction Details</h3>
        </div>
        <ion-card>
            <ion-card-header>
                <ion-card-title>
                    John Doe
                </ion-card-title>
                <ion-card-subtitle>
                    Ride Sharer Service
                </ion-card-subtitle>
                <div class="date">7/19/2022</div>
            </ion-card-header>
            <ion-card-content>
                <div class="cardsection">
                    <p>Address</p>
                    <p>123 Street Address, City Name</p>
                    <p>Distance</p>
                    <p>0.5 km</p>
                </div>
                <ion-button class="viewbutton" expand="block">View Details</ion-button>
            </ion-card-content>
        </ion-card>
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
    IonButton,
} from '@ionic/vue';
import { 
    bookOutline,
    timeOutline,
    personCircleOutline,
    logOutOutline,
} from 'ionicons/icons';


export default({
    name: "TransactionDetail",
    components:{
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle,
        IonCardTitle,
        IonButton,
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
.section{
    background: var(--ion-color-dark-red);
    height: 150px;
    position: relative;
}
.section h3{
    position: absolute;
    top: 70px;
    right: 0;
    left: 0;
}
.section::before {
  content: "";
  position: absolute;
  top: 150px;
  background-color: #fff;
  height: 50px;
  width: 25px;
  border-top-left-radius: 25px;
  box-shadow: 0 -25px 0 0 #b7170b; /* This is where the magic happens! */
}
.section::after{
    content: "";
    position: absolute;
    top: 150px;
    background-color: #fff;
    height: 50px;
    width: 25px;
    border-top-right-radius: 25px;
    box-shadow: 0 -25px 0 0 #b7170b;
    right: 0;
}
ion-content{
    --ion-background-color: var(--ion-color-dark-contrast);
    border-radius: 30px !important;
}
h3{
    color: #fff;
    margin: 0px 20px 70px 20px;
    text-align: center;
}
ion-card-title{
    color: #000;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
}
ion-card-subtitle{
    color: #000;
}
ion-card-content{
    background-color: #f4f4f4;
}
.cardsection{
    display:flex;
    flex-wrap: wrap;
}
.cardsection p{
    width: 50%;
    margin: 8px auto;
    display:flex;
    align-items: center
}
ion-card-header{
    background-color:#ededed;
    position:relative;
}
.date{
    position: absolute;
    right: 23px;
    top: 29px;
    color: #B7160B;
}
.viewbutton{
    --background: #b7170b;
    --background-activated: var(--ion-color-hover-red);
}
</style>
