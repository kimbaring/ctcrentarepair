<template>
  <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/register"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        <ion-content>
            <div class="titlereg">
                <h3>Create new account as Customer</h3>
                <p>Please fill up the form</p>
            </div>
            <div class="regforms">
                <ion-input placeholder="Firstname"></ion-input>
                <ion-input placeholder="Lastname"></ion-input>
                <ion-input placeholder="Username"></ion-input>
                <ion-input placeholder="Email"></ion-input>
                <ion-input placeholder="Password"></ion-input>
                <ion-input placeholder="ConfirmPassword"></ion-input>
                <ion-button class="loginbutton" @click="$router.push('/login')" expand="block">Register</ion-button>
                <p>Already have an account? <a @click="$router.push('/login')">Sign In</a></p>
            </div>
        </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage,IonBackButton,IonToolbar,IonButtons,IonInput} from '@ionic/vue';
import {logoApple} from 'ionicons/icons';

export default ({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonBackButton,
    IonButtons,
    IonInput,
    IonToolbar
  },
  setup(){
    return{
      logoApple,
    }
  }
});
</script>

<style scoped>
*{margin: 0;padding: 0;}
.whitebg{
background-color: white;
height: 25vh;
position: absolute;
top: 0;
left: 0;
right: 0;
}
.content{
  height: 100%;
  min-height: 550px;
  position: relative;
}
ion-toolbar{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    --ion-background-color: #fff;
}
ion-buttons{
    --ion-background-color: #fff;
}
ion-button{
    height: 50px;
  --border-radius: 10px;
  margin-bottom: 10px;
  --background: #b7170b;
  --background-activated: var(--ion-color-hover-red);
  font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}
.titlereg{
    text-align: center;
    position: absolute;
    top: 37px;
    left: 0;
    right: 0;
}
ion-input{
    width: 277px;
    height: 51px;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 11px;
    width: 100%;
    margin: 0 0 10px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    --padding-start:15px
}
.regforms{
    position: absolute;
    top: 118px;
    left: 20px;
    right: 20px;
}
section p{
    text-align: center;
}
section{
    position: absolute;
    top: 558px;
    left: 30px;
    right: 30px;
    margin-bottom: 20px;
}
ion-content{
    --ion-background-color:none;
    background-image: url('@/img/backgroundrentarepair.jpg');
    background-size: cover;
    background-position: bottom;
    height: 100%;
    width: 100%;
}
.regforms p{
    text-align: center;
}
/**END OF CARD LAYOUT */
</style>
