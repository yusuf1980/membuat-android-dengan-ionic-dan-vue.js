<template>
    <ion-page>
        <HeaderNative title="Menampilkan Dialog" />
        <ion-content>
            <div class="dialog-demo">
                <h1>Dialog</h1>
                <ion-button @click="showAlert">Show Alert</ion-button>
                <ion-button @click="showConfirm">Show Confirm</ion-button>
                <ion-button @click="showPrompt">Show Prompt</ion-button>
                <p v-if="result">Result: {{ result }}</p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref } from 'vue';
import { Dialog } from '@capacitor/dialog';

const result = ref('');

// Fungsi untuk menampilkan Alert
const showAlert = async () => {
  await Dialog.alert({
    title: 'Alert Title',
    message: 'This is an alert message.',
  });
};

// Fungsi untuk menampilkan Confirm
const showConfirm = async () => {
  const response = await Dialog.confirm({
    title: 'Confirm Title',
    message: 'Do you want to proceed?',
  });
  result.value = response.value ? 'User clicked OK' : 'User clicked Cancel';
};

// Fungsi untuk menampilkan Prompt
const showPrompt = async () => {
  const response = await Dialog.prompt({
    title: 'Prompt Title',
    message: 'Please enter your name:',
    placeholder: 'Enter your name',
  });
  result.value = response.value ? `User entered: ${response.value}` : 'User cancelled';
};
</script>

<style scoped>
.dialog-demo {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
}

p {
  margin-top: 20px;
  font-weight: bold;
}
</style>