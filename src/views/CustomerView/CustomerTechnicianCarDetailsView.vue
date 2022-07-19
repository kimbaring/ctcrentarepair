<template>
    <ion-page>
         <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/customer/dashboard/location"></ion-back-button>
                </ion-buttons>                
            </ion-toolbar>
            <ion-title>Customer Car Details</ion-title>
        </ion-header>
        <ion-content>
            <div class="form">
                <div>
                    Owner Name
                    <ion-input placeholder="e.g. John Doe"></ion-input>
                </div>
            
                <div class="col2">
                    <div>
                        Plate No.
                        <ion-input placeholder="e.g. XYZ123"></ion-input>
                    </div>
                    <div>
                        Model
                        <ion-input placeholder="e.g. Toyota"></ion-input>
                    </div>
                </div>
                <div>
                    Brand
                    <ion-input placeholder="e.g. Sedan"></ion-input>
                </div>
                 <div>
                    More Information
                    <ion-textarea placeholder="e.g. Broken breaks, engine smoking, etc."></ion-textarea>
                </div>
            </div>
            <div class="submit_btn">
                <ion-button expand="block" size="large" @click="$router.push('/customer/dashboard/location/cardetails/waiting')">Submit</ion-button>
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
    IonContent
} from '@ionic/vue';



export default({
    components:{
        IonTitle,
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

<style scoped>
ion-content{--background:#fff;border-radius: 20px 20px 0 0;overflow:hidden}
.form{min-height:500px}
.form > div{margin:15px;}
.form ion-input{border:1px solid #aaa;border-radius:10px;margin:10px 0 0;--padding-top:15px;--padding-bottom:15px;--padding-start:15px;--padding-end:15px}
.form ion-textarea{border:1px solid #aaa;border-radius:10px;margin:10px 0 0;--padding-top:15px;--padding-bottom:15px;--padding-start:15px;--padding-end:15px;height:15vh}
.submit_btn{position:fixed;bottom:0;left:0;background:#b7160b;width:100%;height:130px;padding:20px;z-index:10}
.submit_btn ion-button{--background:#fff;--color:#222;font-size:14px;--padding-top:15px;--padding-bottom:15px;--border-radius:10px}
.ion-page{background-color: #b7160b;}
ion-button{--background: #b7160b;}
ion-title{text-align: center;}
ion-header{color:#fff;padding-bottom: 20px;}
ion-header small{text-align: center;display: block;}
ion-header::after {background-image: none;}
ion-toolbar{--background:#b7160b;--color:#fff}
ion-input{--background: #fff;--color: #333;}
.col2{display: flex;justify-content: space-between;}
.col2 > *{width: 48%;}
</style>
