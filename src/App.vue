<template>
  <ion-app :mode="mode">
    <ion-router-outlet />
    <!-- Tempat untuk menampilkan halaman yang sedang aktif -->
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { isPlatform } from "@ionic/vue";

const mode = isPlatform("ios") ? "ios" : "md";
</script>

<style>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.button-container {
  padding-top: 15px;
  text-align: center;
}
</style>
