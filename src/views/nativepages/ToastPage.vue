<template>
    <ion-page>
        <HeaderNative title="Notifikasi Toast" />
        <ion-content>
            <div class="button-container">
                <ion-button @click="showSuccessToast">Toast Sukses</ion-button>
                <ion-button @click="showErrorToast">Toast Error</ion-button>
            </div>
            <div class="button-container">
                <form @submit.prevent="submitForm">
                    <ion-list>
                        <ion-item>
                            <ion-input v-model="name" label="Nama" placeholder="Ketik Nama Anda"></ion-input>
                        </ion-item>
                    </ion-list>
                    <ion-button type="submit">Kirim</ion-button>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton, IonList, IonItem, IonInput } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { Toast } from '@capacitor/toast';
import { ref } from 'vue';

const name = ref('')

const showSuccessToast = async () => {
    await Toast.show({
        text: 'Operasi berhasil!',
        duration: 'short',
        position: 'bottom',
    });
}
const showErrorToast = async () => {
    await Toast.show({
        text: 'Terjadi kesalahan!',
        duration: 'long',
        position: 'top',
    });
}

const submitForm = async () => {
    if (emptyName()) {
        return await Toast.show({
            text: `Nama harus diisi!`,
            duration: 'short',
            position: 'bottom',
        })
    }
    // Simulasi pengiriman formulir
    await Toast.show({
        text: `Formulir dikirim dengan nama: ${name.value}`,
        duration: 'long',
        position: 'bottom',
    });
    // Reset nama setelah pengiriman
    name.value = '';
}

const emptyName = () => {
    return name.value === '' ? true : false;
}
</script>