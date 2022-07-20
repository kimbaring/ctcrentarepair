<template>
    <ion-page>
    <ion-content>
        <div class="section">
            <div class="profile_img">
                <ion-img></ion-img>
            </div>
            <div class="profile_form">
                <ion-input type="password" v-model="user.currentpassword" placeholder="Current Password"></ion-input>
                <ion-input type="password" v-model="user.newpassword" placeholder="New Password"></ion-input>
                <ion-input type="password" v-model="user.cnfnewpassword" placeholder="Confirm New Password"></ion-input>
                <ion-button expand="block">Save</ion-button>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>


<script>
import { 
    IonPage,
    IonContent,
    IonImg,
    IonInput
} from '@ionic/vue';

export default({
    components:{
        IonPage,
        IonContent,
        IonImg,
        IonInput
    },
    data(){
        return{
            user:{}
        };
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('user_info'))
    },
    methods:{
    }
});

</script>



<style scoped>

.profile_img{position: absolute;
top: 30px;
left: 50px;
right: 50px;width: 200px;height: 200px;margin: 0 auto;border-radius: 50%;overflow: hidden;background: #b7170b;z-index:3}
.profile_img ion-img{width:inherit;height: inherit;border-radius: 50%;position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
.section{
    background: #333;
    height: 200px;
    position: relative;
    top: 0;
    height: 100%;
    min-height: 100vh;
}

.section::before{
    content:"";
    position: absolute;
    top:0;
    width: 100%;
    height: 50%;
    background: #eee;
}

.profile_form{
   background: #fff;
    height: auto;
    padding: 20px;
    z-index: 2;
    position: absolute;
    width: 90%;
    top: 175px;
    left: 50%;
    transform: translateX(-51%);
    border-radius: 20px;
    padding:100px 20px 20px;
}


.profile_form a{
    display: block;
    display: flex;
    text-decoration: none;
    margin-bottom: 10px;
    color:#b7170b;
    text-align: center;
    display: block;
}
.profile_form ion-input{
    border-radius: 10px;
    border:1px solid #ccc;
    margin: 10px 0 20px;
    --padding-top:15px;
    --padding-bottom:15px;
}

ion-button{
    margin-top: 20px;
    --background: #b7170b;
}

ion-button{
    height:50px;
    margin:10px 0;

}
</style>
