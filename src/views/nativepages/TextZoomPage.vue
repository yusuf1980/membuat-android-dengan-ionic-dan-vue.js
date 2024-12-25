<template>
    <ion-page>
        <HeaderNative title="Zoom Teks" />
        <ion-content>
            <div class="text-zoom-example">
                <h1>Besar/Kecilkan (Zoom) Teks</h1>
                <p>The current text zoom level is: {{ currentZoomLevel }}</p>
                <ion-button @click="increaseZoom">+ Teks</ion-button>
                <ion-button @click="decreaseZoom">- Teks</ion-button>
                <ion-button @click="resetZoom">Reset</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref } from 'vue';
import { TextZoom } from '@capacitor/text-zoom';

const currentZoomLevel = ref(1); // Default zoom level (1 means default size)

const getZoomLevel = async () => {
    try {
        // Mendapatkan tingkat zoom teks saat ini
        const { value } = await TextZoom.get();
        currentZoomLevel.value = value;
        console.log('Current text zoom level:', value);
    } catch (error) {
        console.error('Error getting zoom level:', error);
    }
};

const increaseZoom = async () => {
    try {
        // Menambah tingkat zoom teks
        await TextZoom.set({ value: currentZoomLevel.value + 0.1 });
        await getZoomLevel();
    } catch (error) {
        console.error('Error increasing zoom level:', error);
    }
};

const decreaseZoom = async () => {
    try {
        // Mengurangi tingkat zoom teks
        await TextZoom.set({ value: currentZoomLevel.value - 0.1 });
        await getZoomLevel();
    } catch (error) {
        console.error('Error decreasing zoom level:', error);
    }
};

const resetZoom = async () => {
    try {
        // Mengatur tingkat zoom kembali ke ukuran default
        await TextZoom.set({ value: 1 });
        await getZoomLevel();
    } catch (error) {
        console.error('Error resetting zoom level:', error);
    }
};

getZoomLevel(); // Mendapatkan tingkat zoom saat aplikasi dimulai
</script>

<style scoped>
.text-zoom-example {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}
</style>