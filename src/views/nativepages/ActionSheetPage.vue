<template>
  <ion-page>
    <HeaderNative title="Action Sheet" />

    <ion-content :fullscreen="true">
      <div id="container">
        <button @click="showActions()">Tampilkan Action Sheet</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import HeaderNative from '@/components/HeaderNative.vue';
import { IonContent, IonPage } from '@ionic/vue';
import { ActionSheet } from '@capacitor/action-sheet';

const showActions = async () => {
  const result = await ActionSheet.showActions({
    title: 'Opsi Foto',
    message: 'Pilih salah satu opsi',
    options: [
      {
        title: 'Unggah',
      },
      {
        title: 'Bagikan',
      },
      {
        title: 'Hapus',
      },
    ],
  });

  console.log('Action Sheet result:', result);
};
</script>

