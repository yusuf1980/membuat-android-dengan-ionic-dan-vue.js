<template>
    <ion-page>
        <HeaderNative title="Mengakses Getar" />
        <ion-content>
            <div class="button-container">
                <ion-button @click="hapticsImpactLight">Light</ion-button>
                <ion-button @click="hapticsImpactMedium">Medium</ion-button>
                <ion-button @click="hapticsImpactHeavy">Heavy</ion-button>
            </div>
            <div class="button-container">
                <ion-button @click="hapticsVibrate">Vibrasi</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const hapticsImpactLight = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
};

const hapticsImpactMedium = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
};

const hapticsImpactHeavy = async () => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
};

const hapticsVibrate = async () => {
    await Haptics.vibrate();
};
</script>