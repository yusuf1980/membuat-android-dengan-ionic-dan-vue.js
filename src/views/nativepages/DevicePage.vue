<template>
    <ion-page>
        <HeaderNative title="Informasi Perangkat" />
        <ion-content>
            <div class="device-info">
                <h1>Device Information</h1>
                <p><strong>Platform:</strong> {{ deviceInfo.platform }}</p>
                <p><strong>Model:</strong> {{ deviceInfo.model }}</p>
                <p><strong>OS Version:</strong> {{ deviceInfo.osVersion }}</p>
                <p><strong>Device ID:</strong> {{ deviceInfo.deviceId }}</p>
                <p><strong>Is Charging:</strong> {{ deviceInfo.isCharging ? 'Yes' : 'No' }}</p>
                <p><strong>Baterai Status:</strong> {{ deviceInfo.batteryLevel }}</p>
                <p><strong>Kode Bahasa:</strong> {{ deviceInfo.languageCode }}</p>
                <p><strong>Tag Bahasa:</strong> {{ deviceInfo.languageTag }}</p>

                <ion-button @click="getDeviceInfo">Get Device Info</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref } from 'vue';
import { Device } from '@capacitor/device';

// State untuk menyimpan informasi perangkat
const deviceInfo = ref({
    platform: '',
    model: '',
    osVersion: '',
    deviceId: '',
    isCharging: false,
    batteryLevel: 0,
    languageCode: '',
    languageTag: ''
});

// Fungsi untuk mendapatkan informasi perangkat
const getDeviceInfo = async () => {
    try {
        const info = await Device.getInfo();
        deviceInfo.value.platform = info.platform;
        deviceInfo.value.model = info.model;
        deviceInfo.value.osVersion = info.osVersion;
        console.log(info)
        await getIdInfo()
        await logBatteryInfo()
        await getLanguageCode()
        await getLanguageTag()
    } catch (error) {
        console.error('Error getting device info:', error);
    }
};

const getIdInfo = async () => {
    const info = await Device.getId();
    deviceInfo.value.deviceId = info.identifier

    console.log(info);
};

const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
    deviceInfo.value.isCharging = info.isCharging
    if (info.batteryLevel === 1) {
        deviceInfo.value.batteryLevel = 'Penuh'
    }else {
        deviceInfo.value.batteryLevel = info.batteryLevel
    }

    console.log(info);
};

const getLanguageCode = async () => {
  const info = await Device.getLanguageCode();
  deviceInfo.value.languageCode = info.value
  console.log(info);
};

const getLanguageTag = async () => {
  const info = await Device.getLanguageTag();
  deviceInfo.value.languageTag = info.value
  console.log(info);
};


</script>

<style scoped>
.device-info {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}

p {
    font-size: 18px;
    margin-top: 10px;
}
</style>
