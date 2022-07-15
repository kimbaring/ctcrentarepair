<template>
<IonPage>
<ion-router-outlet></ion-router-outlet>
</IonPage>
</template>

<script>
import {
    IonRouterOutlet,
    IonPage
} from '@ionic/vue';

export default({
    components:{
        IonRouterOutlet,
        IonPage
    }
});
</script>

<style scoped>
ion-router-outlet{overflow-y:scroll}
</style>
