<template>
    <ion-page>
        <HeaderNative title="App Capacitor" />
        <ion-content>
            <ion-list>
                <ion-item button @click="appInfo">Info Aplikasi</ion-item>
                <ion-item button @click="minimizeApp">Minimize Aplikasi</ion-item>
                <ion-item button @click="closeApp">Keluar dari Aplikasi</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonList, IonItem } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { App } from '@capacitor/app';

const appInfo = async () => {
    const info = await App.getInfo();
    console.log(info);
    alert('Nama Aplikasi: ' + info.name)
    alert('Versi Aplikasi: ' + info.version)
    // Output:
    // {
    //   name: 'my-ionic-vue-app',
    //   id: 'io.ionic.starter',
    //   version: '1.0.0',
    //   build: '100',
    //   platform: 'android'
    // }
}

const minimizeApp = () => {
    App.minimizeApp();
}

const closeApp = () => {
    App.exitApp();
}

// App.addListener('appStateChange', ({ isActive }) => {
//     console.log('Is app active?', isActive);
// });

App.addListener('appStateChange', ({ isActive }) => {
    if (isActive) {
        console.log('App is in foreground');
    } else {
        console.log('App is in background');
    }
});

</script>