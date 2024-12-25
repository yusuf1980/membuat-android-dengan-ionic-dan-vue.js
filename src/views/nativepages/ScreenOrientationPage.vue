<template>
    <ion-page>
        <HeaderNative title="Kunci Posisi Layar" />
        <ion-content>
            <div class="screen-orientation">
                <h1>Kunci Orientasi Layar</h1>
                <p>Current orientation: {{ currentOrientation }}</p>
                <ion-button @click="lockOrientationPortrait">Kunci Portrait</ion-button>
                <ion-button @click="lockOrientationLandscape">Kunci Landscape</ion-button>
                <ion-button @click="unlockOrientation">Buka KUnci Orientation</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref, onMounted } from 'vue';
import { ScreenOrientation } from '@capacitor/screen-orientation';

const currentOrientation = ref('');

const getOrientation = async () => {
    try {
        // Mendapatkan orientasi layar saat ini
        const { type } = await ScreenOrientation.orientation();
        currentOrientation.value = type;
        console.log('Current orientation:', type);
    } catch (error) {
        console.error('Error getting screen orientation:', error);
    }
};

const lockOrientationPortrait = async () => {
    try {
        // Mengunci orientasi layar ke Portrait
        await ScreenOrientation.lock({ orientation: 'portrait' });
        await getOrientation();
    } catch (error) {
        console.error('Error locking to portrait orientation:', error);
    }
};

const lockOrientationLandscape = async () => {
    try {
        // Mengunci orientasi layar ke Landscape
        await ScreenOrientation.lock({ orientation: 'landscape' });
        await getOrientation();
    } catch (error) {
        console.error('Error locking to landscape orientation:', error);
    }
};

const unlockOrientation = async () => {
    try {
        // Membuka kunci orientasi layar
        await ScreenOrientation.unlock();
        await getOrientation();
    } catch (error) {
        console.error('Error unlocking orientation:', error);
    }
};

// Mendapatkan orientasi layar saat aplikasi dimuat
onMounted(() => {
    getOrientation();
});
</script>

<style scoped>
.screen-orientation {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}
</style>