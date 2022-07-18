<template>
<ion-page>
    <ion-content>

    </ion-content>

</ion-page>
</template>


<script>
import { 
    IonPage,
    IonContent
} from '@ionic/vue';
import { 
    bookOutline,
    timeOutline,
    personCircleOutline,
    logOutOutline
} from 'ionicons/icons';

export default({
    name: "CustomerDashboard",
    components:{
        IonPage,
        IonContent
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
ion-content{
    --ion-background-color: var(--ion-color-content);
}
</style>
