<template>
    <ion-page>
         <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>                
            </ion-toolbar>
            <h2>Waiting for Tow Truck Operator to Accept</h2>
        </ion-header>
        <ion-content>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121979.97053401588!2d-74.10890246224842!3d40.685281845644305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sph!4v1657638758299!5m2!1sen!2sph"></iframe>
            </div>
        </ion-content>
    </ion-page>
</template>


<script>
import {
    IonPage,
    IonBackButton,
    IonHeader,
    IonButtons,
    IonToolbar,
    IonContent
} from '@ionic/vue';



export default({
    components:{
        IonPage,
        IonHeader,
        IonBackButton,
        IonButtons,
        IonToolbar,
        IonContent
    },
    data(){
        return{
        }
    }
});
</script>

<style scoped src="@/assets/css/common.css"></style>
<style scoped>
h2{text-align:center;padding:20px}
.map{margin: 0 -20px}
.map iframe{width:100%;border:none;height:50vh}
</style>
