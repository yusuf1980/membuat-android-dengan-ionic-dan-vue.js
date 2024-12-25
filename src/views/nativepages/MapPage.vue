<template>
  <ion-page>
    <HeaderNative title="Lokasi Saat Ini" />
    <ion-content>
      <div id="map" style="height: 93vh; width: 100wh"></div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import HeaderNative from "@/components/HeaderNative.vue";
import { onMounted, ref } from "vue";
import { Geolocation } from "@capacitor/geolocation";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const pos = ref();
const lat = ref(null);
const long = ref(null);

const initializeMap = async () => {
  try {
    const permission = await Geolocation.checkPermissions();
    if (permission.location !== "granted") {
      await Geolocation.requestPermissions();
    }

    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });

    const { latitude, longitude } = position.coords;
    pos.value = position.coords;

    lat.value = latitude;
    long.value = longitude;

    const map = L.map("map").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.setView([latitude, longitude], 16);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("Lokasi Anda")
      .openPopup();
  } catch (error) {
    console.error("Error getting location", error);
  }
};

onMounted(() => {
  initializeMap();
});
</script>
