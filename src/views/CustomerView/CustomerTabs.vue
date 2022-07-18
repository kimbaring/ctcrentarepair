<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/customer/dashboard">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="transactionhistory" href="/customer/transactionhistory">
          <ion-icon :icon="timeOutline" />
          <ion-label>Transaction History</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/customer/profile">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personCircleOutline, timeOutline, homeOutline } from 'ionicons/icons';

export default({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data() {
    return {
      personCircleOutline,
      timeOutline,
      homeOutline,
    }
  }
});
</script>
<style>
ion-tab-bar{
    background: var(--ion-color-light-contrast);
}
ion-tab-button{
    --background-focused: var(--ion-color-secondary-contrast);
    background: var(--ion-color-light-contrast);
    --color-selected: var(--ion-color-secondary-contrast);
}
</style>
