<template>
    <ion-page>
        <HeaderNative title="Bagikan Konten/URL/Gambar/file" />
        <ion-content>
            <div class="share-example">
                <h1>Bagikan Konten/URL/Gambar/File</h1>
                <ion-button @click="shareText">Share Text</ion-button>
                <ion-button @click="shareURL">Share URL</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { Share } from '@capacitor/share';

const shareText = async () => {
    try {
        // Berbagi teks
        await Share.share({
            title: 'Ionic Share',
            text: 'Ini adalah teks yang dibagikan dari aplikasi Ionic!',
            url: 'https://ionicframework.com', // (opsional) URL terkait yang akan dibagikan
            dialogTitle: 'Share via', // (opsional) Judul dialog
        });
        console.log('Teks berhasil dibagikan');
    } catch (error) {
        console.error('Error while sharing text:', error);
    }
};

const shareURL = async () => {
    try {
        // Berbagi URL
        await Share.share({
            title: 'Check this out!',
            text: 'Kunjungi situs web kami untuk informasi lebih lanjut.',
            url: 'https://ionicframework.com', // URL yang ingin dibagikan
            dialogTitle: 'Share this link', // Judul dialog berbagi
        });
        console.log('URL berhasil dibagikan');
    } catch (error) {
        console.error('Error while sharing URL:', error);
    }
};

const shareImage = async () => {
    try {
        await Share.share({
            title: 'Check out this image!',
            text: 'Here is an awesome image from my app.',
            url: 'file:///path/to/your/image.jpg', // Gambar yang akan dibagikan
            dialogTitle: 'Share Image'
        });
    } catch (error) {
        console.error('Error sharing image:', error);
    }
};
</script>

<style scoped>
.share-example {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}
</style>