<template>
    <ion-page>
        <HeaderNative title="Membuka Browser" />
        <ion-content>
            <div class="browser-example">
                <h1>Membuka Browser</h1>
                <div>
                    <ion-button @click="openBrowser">Open URL in Browser</ion-button>
                    <ion-button @click="openAppBrowser">Open URL in App Browser</ion-button>
                    <ion-button @click="closeBrowser">Close Browser</ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { Browser } from '@capacitor/browser';

const openBrowser = async () => {
  try {
    // Membuka URL di browser default perangkat
    const url = 'https://www.example.com';
    await Browser.open({ url });
    console.log('URL opened in browser');
  } catch (error) {
    console.error('Error opening browser:', error);
  }
};

const openAppBrowser = async () => {
  try {
    // Membuka URL di dalam aplikasi (seperti WebView)
    const url = 'https://www.example.com';
    await Browser.open({ url, windowName: '_blank' }); // windowName untuk membuka di jendela baru
    console.log('URL opened in app browser');
  } catch (error) {
    console.error('Error opening app browser:', error);
  }
};

const closeBrowser = async () => {
  try {
    // Menutup browser (jika dibuka dalam aplikasi)
    await Browser.close();
    console.log('Browser closed');
  } catch (error) {
    console.error('Error closing browser:', error);
  }
};
</script>

<style scoped>
.browser-example {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
}
</style>

