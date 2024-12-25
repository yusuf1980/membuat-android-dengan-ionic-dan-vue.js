<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button default-href="/home"></ion-back-button>
            </ion-buttons>
            <ion-title>{{ props.title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script setup>
import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
} from '@ionic/vue';

const props = defineProps(['title'])
</script>