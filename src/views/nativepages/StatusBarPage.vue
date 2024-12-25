<template>
    <ion-page>
        <HeaderNative title="Kontrol Status Bar" />
        <ion-content>
            <div class="status-bar-example">
                <h1>Status Bar</h1>
                <ion-button @click="setStatusBarColor">Set Status Bar Color</ion-button>
                <ion-button @click="hideStatusBar">Hide Status Bar</ion-button>
                <ion-button @click="showStatusBar">Show Status Bar</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { StatusBar } from '@capacitor/status-bar';

const setStatusBarColor = async () => {
    try {
        // Mengubah warna latar belakang status bar menjadi biru
        await StatusBar.setBackgroundColor({ color: '#0000FF' });
        // Mengubah warna ikon dan teks menjadi terang
        await StatusBar.setStyle({ style: 'LIGHT' });
        console.log('Status bar color set to blue and style to LIGHT');
    } catch (error) {
        console.error('Error setting status bar color:', error);
    }
};

const hideStatusBar = async () => {
    try {
        // Menyembunyikan status bar
        await StatusBar.hide();
        console.log('Status bar hidden');
    } catch (error) {
        console.error('Error hiding status bar:', error);
    }
};

const showStatusBar = async () => {
    try {
        // Menampilkan status bar
        await StatusBar.show();
        console.log('Status bar shown');
    } catch (error) {
        console.error('Error showing status bar:', error);
    }
};
</script>

<style scoped>
.status-bar-example {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}
</style>