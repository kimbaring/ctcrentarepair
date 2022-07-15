<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { axiosReq } from './assets/js/functions.js';

export default({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    // let formdata = {
    //   email:'ceeabellanosa@proweaver.net',
    //   password:'admin3'
    // };

    // axiosReq({
    //   method:'post',
    //   url:'http://localhost/kim/ciapi/api/users/login?_method=email',
    //   data:formdata,
    // }).then(res=>{
    //   console.log(res.data);
    // });

    let formdata = {
      user_id:'10000002',
      token:'e6df8cae247f08beffe6ca21da931093'
    };

    axiosReq({
      method:'post',
      url:'http://localhost/kim/ciapi/api/users/validatetoken',
      data:formdata,
    }).then(res=>{
      console.log(res.data);
    });

  }
});
</script>

<style>
ion-router-outlet{overflow-y:scroll}
</style>