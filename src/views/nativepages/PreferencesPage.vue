<template>
    <ion-page>
        <HeaderNative title="Simpan Data Lokal" />
        <ion-content>
            <div class="preferences-example">
                <h1>Simpan Data Lokal</h1>
                <ion-button @click="savePreferences">Save Preferences</ion-button>
                <ion-button @click="loadPreferences">Load Preferences</ion-button>
                <ion-button @click="removePreferences">Remove Preferences</ion-button>
                <p>{{ preferenceMessage }}</p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref } from 'vue';
import { Preferences } from '@capacitor/preferences';

const preferenceMessage = ref('');

const savePreferences = async () => {
    try {
        // Menyimpan preferensi pengguna dengan key-value
        await Preferences.set({
            key: 'theme',
            value: 'dark',
        });
        preferenceMessage.value = 'Preferences saved: Theme set to dark';
        console.log('Preferences saved');
    } catch (error) {
        console.error('Error saving preferences:', error);
    }
};

const loadPreferences = async () => {
    try {
        // Mengambil preferensi pengguna berdasarkan key
        const { value } = await Preferences.get({ key: 'theme' });
        preferenceMessage.value = value ? `Loaded preference: ${value}` : 'No preference found';
        console.log('Preferences loaded');
    } catch (error) {
        console.error('Error loading preferences:', error);
    }
};

const removePreferences = async () => {
    try {
        // Menghapus preferensi dengan key tertentu
        await Preferences.remove({ key: 'theme' });
        preferenceMessage.value = 'Preference removed';
        console.log('Preference removed');
    } catch (error) {
        console.error('Error removing preferences:', error);
    }
};

const saveUserData = async (userData) => {
  const userDataString = JSON.stringify(userData);
  await Preferences.set({ key: 'user', value: userDataString });
};

const loadUserData = async () => {
  const { value } = await Preferences.get({ key: 'user' });
  const userData = value ? JSON.parse(value) : null;
  console.log(userData);
};

</script>

<style scoped>
.preferences-example {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}
</style>