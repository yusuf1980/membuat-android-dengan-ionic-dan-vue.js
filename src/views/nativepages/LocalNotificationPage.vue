<template>
    <ion-page>
        <HeaderNative title="Notifikasi Lokal" />
        <ion-content>
            <div class="button-container">
                <ion-button @click="sendNotification">Kirim Notifikasi</ion-button>
            </div>
            <div class="button-container">
                <ion-button @click="scheduleDailyReminder">Jadwalkan Pengingat Harian</ion-button>
            </div>
            <div class="button-container">
                <ion-button @click="sendNotificationWithHandle">Notifikasi dan Tindak Lanjut</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import HeaderNative from '@/components/HeaderNative.vue';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import { onMounted } from 'vue';

const sendNotification = async () => {
    // Mengirimkan notifikasi lokal
    await LocalNotifications.schedule({
        notifications: [
            {
                title: "Pemberitahuan",
                body: "Ini adalah pesan notifikasi lokal.",
                id: 1,
                schedule: { at: new Date(new Date().getTime() + 1000) }, // Mengatur notifikasi untuk muncul 1 detik setelahnya
                sound: null, // Anda bisa mengganti dengan nama file suara jika diinginkan
                attachments: null, // Lampiran gambar (jika ada)
                actionTypeId: "", // ID aksi jika diperlukan
                extra: null, // Data tambahan yang bisa ditambahkan ke notifikasi
            },
        ],
    });

    await Toast.show({
        text: 'Notifikasi terkirim'
    })
}

const scheduleDailyReminder = async () => {
    // Jadwalkan notifikasi untuk muncul setiap hari pada pukul 9 pagi
    await LocalNotifications.schedule({
        notifications: [
            {
                title: "Pengingat Harian",
                body: "Ini adalah pengingat harian Anda.",
                id: 1,
                schedule: {
                    every: 'day',  // Pengulangan setiap hari
                    at: new Date(new Date().setHours(9, 0, 0, 0)),  // Menjadwalkan pada jam 9 pagi
                },
                sound: null,
                attachments: null,
                extra: null,
            },
        ],
    });

    await Toast.show({
        text: 'Pengingat dijadwalkan jam 9 pagi'
    })
}

const sendNotificationWithHandle = async () => {
    await LocalNotifications.schedule({
        notifications: [
            {
                title: "Tindak Lanjut",
                body: "Ketuk untuk melihat lebih lanjut.",
                id: 1,
                schedule: { at: new Date(new Date().getTime() + 1000) },
                extra: { action: 'viewDetails' }, // Data tambahan yang bisa dikirimkan
            },
        ],
    });

    await Toast.show({
        text: 'Terkirim! Klik notifikasi jika nanti tampil!'
    })
}

onMounted(() => {
    // Menambahkan event listener untuk menangani aksi pada notifikasi
    LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
        console.log('Notifikasi diklik:', notification);
        alert('Notifikasi diklik! ' + JSON.stringify(notification));
    });
})
</script>