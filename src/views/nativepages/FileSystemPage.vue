<template>
    <ion-page>
        <HeaderNative title="Notifikasi Toast" />
        <ion-content>
            <div class="filesystem-example">
                <h1>Filesystem</h1>
                <ion-button @click="saveFile">Save File</ion-button>
                <ion-button @click="readFile">Read File</ion-button>
                <ion-button @click="deleteFile">Delete File</ion-button>
                <p>{{ fileContent }}</p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { ref } from 'vue';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const fileContent = ref('');

const saveFile = async () => {
    try {
        // Menyimpan file dengan nama "myFile.txt" di direktori aplikasi
        await Filesystem.writeFile({
            path: 'myFile.txt',
            data: 'This is a test file content!',
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        });
        console.log('File saved successfully!');
    } catch (error) {
        console.error('Error saving file:', error);
    }
};

const readFile = async () => {
    try {
        // Membaca file yang telah disimpan
        const result = await Filesystem.readFile({
            path: 'myFile.txt',
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        });
        fileContent.value = result.data;
        console.log('File read successfully!');
    } catch (error) {
        console.error('Error reading file:', error);
    }
};
const deleteFile = async () => {
    try {
        // Menghapus file "myFile.txt" dari direktori aplikasi
        await Filesystem.deleteFile({
            path: 'myFile.txt',
            directory: Directory.Documents,
        });
        console.log('File deleted successfully!');
    } catch (error) {
        console.error('Error deleting file:', error);
    }
};
</script>

<style scoped>
.filesystem-example {
    text-align: center;
    margin-top: 50px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
}
</style>
