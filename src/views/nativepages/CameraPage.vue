<template>
  <ion-page>
    <HeaderNative title="Kamera" />
    <ion-content>
      <ion-button @click="takePhoto">Ambil Foto</ion-button>
      <ion-button @click="chooseFromGallery">Pilih dari galeri</ion-button>
      <div v-if="photo">
        <img :src="photo.webPath" alt="Captured photo" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import HeaderNative from "@/components/HeaderNative.vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { ref } from "vue";

const photo = ref(null);
const takePhoto = async () => {
  try {
    const photoTaken = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 90, 
      allowEditing: false,
    });
    photo.value = photoTaken;
    console.log("Photo taken", photoTaken);
  } catch (error) {
    console.error("Error taking photo:", error);
  }
};

const chooseFromGallery = async () => {
  try {
    const photoChosen = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Photos, 
      quality: 90, 
      allowEditing: false,
    });
    photo.value = photoChosen;
    console.log("Photo chosen from gallery", photoChosen);
  } catch (error) {
    console.error("Error choosing photo:", error);
  }
};
</script>
