<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Ionic dan Vue</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item router-link="/about">Tentang Saya</ion-item>
        <ion-item router-link="/app">Capacitor App</ion-item>
        <ion-item router-link="/action-sheet">Action Sheet</ion-item>
        <ion-item router-link="/camera">Kamera</ion-item>
        <ion-item router-link="/maps">Lokasi Saat Ini</ion-item>
        <ion-item router-link="/haptics">Akses Getar Perangkat</ion-item>
        <ion-item router-link="/toast-notification">Notifikasi Toast</ion-item>
        <ion-item router-link="/connection">Periksa Koneksi/Jaringan</ion-item>
        <ion-item router-link="/local-notification">Notifikasi Lokal</ion-item>
        <ion-item router-link="/clipboard">Salin Teks ke Clipboard</ion-item>
        <ion-item router-link="/dialog">Tampilkan Dialog</ion-item>
        <ion-item router-link="/device">Info Perangkat</ion-item>
        <ion-item router-link="/browser">Membuka Browser</ion-item>
        <ion-item router-link="/file-system">File System</ion-item>
        <ion-item router-link="/status-bar">Kontrol Status Bar</ion-item>
        <ion-item router-link="/preferences">Simpan Data Lokal</ion-item>
        <ion-item router-link="/share">Bagikan Konten/URL/Gambar/File</ion-item>
        <ion-item router-link="/text-zoom">Zoom Teks</ion-item>
        <ion-item router-link="/screen-orientation">Orientasi Layar (Portrait/Landscape)</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/vue';
import { App } from '@capacitor/app';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

onMounted(() => {
  App.addListener('backButton', (event) => {
    // Cek apakah berada di halaman utama
    if (router.currentRoute.value.name === 'Home') {
      // Jika di halaman utama, keluar aplikasi
      App.minimizeApp();
    } else {
      // Jika bukan di halaman utama, biarkan pengguna navigasi kembali
      router.back();
    }
  });
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
