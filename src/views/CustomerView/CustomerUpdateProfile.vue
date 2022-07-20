<template>
    <ion-page>
    <ion-content>
        <div class="section">
            <div class="profile_img">
                <ion-img></ion-img>
            </div>
            <div class="profile_form">
                <ion-input v-model="user.firstname" placeholder="First Name"></ion-input>
                <ion-input v-model="user.middlename" placeholder="Middle Name"></ion-input>
                <ion-input v-model="user.lastname" placeholder="Last Name"></ion-input>
                <ion-input v-model="user.username" placeholder="Username"></ion-input>
                <ion-input v-model="user.email" placeholder="Email"></ion-input>
                <ion-button expand="block" @click="$router.push('/customer/profile/changepassword')">Change Password</ion-button>
                <ion-button expand="block" @click="resetForm">Reset Form</ion-button>
                <ion-button expand="block" class="save" @click="save">Save</ion-button>
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
    IonInput,
    IonButton
} from '@ionic/vue';
import { axiosReq, validateForm } from '@/functions';
import router from '@/router';
import { ciapi } from '@/js/globals';

export default({
    components:{
        IonPage,
        IonContent,
        IonImg,
        IonInput,
        IonButton
    },
    data(){
        return{
            user:{
                firstname: '',
                middlename: '',
                lastname: '',
                username: '',
                email: ''
            }
        };
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('user_info'))
    },
    methods:{
        async openToast(msg, type) {
            const toast = await toastController
            .create({
                message: msg,
                color:type,
                duration: 2000
                })
            return toast.present();
        },
        resetForm(){
            this.user = JSON.parse(localStorage.getItem('user_info'))
        },
        save(){
            console.log('test');
            const valid = validateForm(this.user,{
                firstname: "required",
                lastname: "required",
                username: "required",
                email:{
                    isEmail: true,
                    isRequired: true,
                    callback:()=>{
                        this.openToast('Email must be in valid format!', 'danger')
                    }
                },
                callback:()=>{
                    this.openToast('Required fields are empty!', 'danger')
                }
            });

            if(!valid.allValid) return;

            axiosReq({
                method: 'post',
                url: ciapi+'users/update?user_id='+localStorage.getItem('user_id'),
                headers:{
                    PWAuth: localStorage.getItem('user_token'),
                    PWAuthUser: localStorage.getItem('user_id')
                },
                data:this.user
            }).catch(res=>{
                this.openToast('Something went wrong!', 'danger')
            }).then(res=>{
                if(res.data.success){
                    this.openToast('Profile updated!', 'success');
                    localStorage.setItem('user_info', JSON.stringify(this.user));
                }
            });

        }
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
    height: 850px;
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
    --background:transparent;
    --color:#b7170b;
    --box-shadow: none;
    border: 2px solid #b7170b;
    height:50px;
    margin:10px 0;
    border-radius: 5px;
}

ion-button.save{
    border:none;
    --background: #b7170b;
    color:#fff;
}


</style>
