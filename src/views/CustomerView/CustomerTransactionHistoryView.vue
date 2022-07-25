<template>
<ion-page>
    <ion-content>
        <div class="section">
            <h3>Transaction History</h3>
        </div>
        <ion-card v-for="(t,i) in transactions" :key="i">
            <ion-card-header>
                <ion-card-title>
                    {{ t.name }}
                </ion-card-title>
                <ion-card-subtitle>
                    {{ t.service_type }} Service
                </ion-card-subtitle>
                <div class="date">{{ t.create_at }}</div>
            </ion-card-header>
            <ion-card-content>
                <div class="cardsection">
                    <p>Address</p>
                    <p>{{ t.location_details }}</p>
                    <p>Created</p>
                    <p>{{date(t.created_at)}}</p>
                </div>
                <ion-button @click="$router.push('/customer/transactionhistory/transactiondetails')" class="viewbutton" expand="block">View Details</ion-button>
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
import { get, getDatabase,ref, query, orderByChild, equalTo  } from 'firebase/database';
import {local,date} from '@/functions';

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
        IonButton,
    },

    data(){
        return{
            //ionicons
            bookOutline,
            timeOutline,
            personCircleOutline,
            logOutOutline,
            //end of ionicons

            transactions:[]
        }
    },
    created(){
        const db = getDatabase();
        const que = query(ref(db,'/pending_tasks'),orderByChild('user_id'), equalTo(local.get('user_id')));
        get(que).then(snapshot=>{
            if(snapshot.exists()) for(let snap in snapshot.val()) this.transactions.push(snapshot.val()[snap]);
        });



    },
    methods:{
        date(dateString){
            return date.day('%lm %d, %y',dateString);
        }

        // status(value,isRideSharer = false){
        //     switch (value) {
        //         case 1: return 'Waiting';
        //         case 2: return 'Accepted';
        //         case 3: 
        //             if(isRideSharer) return 'Trip Started';
        //             else return 'Arrived';
        //         case 4:
        //             return 'Completed'
        //     }
        // }
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
    margin: 5px auto;
    display:flex;
    white-space: pre;
    text-overflow: ellipsis;
    overflow: hidden;
    
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
