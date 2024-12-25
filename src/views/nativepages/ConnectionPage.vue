<template>
    <ion-page>
        <HeaderNative title="Periksa Koneksi/Jaringan" />
        <ion-content>
            <div class="text-center">
                <div v-if="isConnected">
                    <p>Anda terhubung ke internet!</p>
                    <p>Jaringan: {{ connectionType }}</p>
                </div>
                <div v-else>
                    <p>Anda tidak terhubung ke internet.</p>
                </div>
                <ion-button @click="checkConnection">Periksa Koneksi</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { Network } from '@capacitor/network';
import { onMounted, ref } from 'vue';
import { Toast } from '@capacitor/toast';

const isConnected = ref(false)
const connectionType = ref('')

const checkConnection = async () => {
    const status = await Network.getStatus();
    isConnected.value = status.connected;
    connectionType.value = status.connectionType;
    await Toast.show({
        text: isConnected.value ? 'Terhubung ke ' + connectionType.value : 'Tidak Terhubung',
        duration: 'short'
    })
}

onMounted(() => {
    checkConnection();

    Network.addListener('networkStatusChange', (status) => {
        isConnected.value = status.connected;
        connectionType.value = status.connectionType;
    });
})
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>