<template>
    <ion-page>
        <HeaderNative title="Salin Teks ke Clipboard" />
        <ion-content>
            <div class="clipboard-container">
                <input v-model="textToCopy" type="text" placeholder="Enter text to copy" />
                <ion-button @click="copyText">Salin Teks</ion-button>
                <ion-button @click="pasteText">Tempel Teks</ion-button>
                <p>Teks dari clipboard: {{ pastedText }}</p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref } from 'vue';
import { Clipboard } from '@capacitor/clipboard';
import { Toast } from '@capacitor/toast';

const textToCopy = ref('');
const pastedText = ref('');

// Fungsi untuk menyalin teks ke clipboard
const copyText = async () => {
    try {
        // Menyalin teks ke clipboard
        await Clipboard.write({
            string: textToCopy.value
        });
        Toast.show({
            text: 'Teks disalin'
        })
        console.log('Text copied to clipboard:', textToCopy.value);
    } catch (error) {
        console.error('Failed to copy text:', error);
    }
};

// Fungsi untuk menempelkan teks dari clipboard
const pasteText = async () => {
    try {
        // Mendapatkan teks dari clipboard
        const { value } = await Clipboard.read();
        pastedText.value = value;
        console.log('Text from clipboard:', value);
    } catch (error) {
        console.error('Failed to read clipboard:', error);
    }
};
</script>

<style scoped>
.clipboard-container {
  text-align: center;
  margin-top: 50px;
}

input, button {
  padding: 10px;
  margin: 10px;
  font-size: 16px;
}

button {
  cursor: pointer;
}

button:disabled {
  background-color: grey;
}
</style>