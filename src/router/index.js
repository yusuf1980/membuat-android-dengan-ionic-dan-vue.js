import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '/action-sheet',
    name: 'action.sheet',
    component: () => import('@/views/nativepages/ActionSheetPage.vue'),
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/views/nativepages/CapacitorAppPage.vue'),
  },
  {
    path: '/camera',
    name: 'camera',
    component: () => import('@/views/nativepages/CameraPage.vue'),
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import('@/views/nativepages/MapPage.vue'),
  },
  {
    path: '/haptics',
    name: 'haptics',
    component: () => import('@/views/nativepages/HapticsPage.vue'),
  },
  {
    path: '/connection',
    name: 'connection',
    component: () => import('@/views/nativepages/ConnectionPage.vue'),
  },
  {
    path: '/toast-notification',
    name: 'toast',
    component: () => import('@/views/nativepages/ToastPage.vue'),
  },
  {
    path: '/local-notification',
    name: 'notification.local',
    component: () => import('@/views/nativepages/LocalNotificationPage.vue'),
  },
  {
    path: '/clipboard',
    name: 'clipboard',
    component: () => import('@/views/nativepages/ClipboardPage.vue'),
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/views/nativepages/DialogPage.vue'),
  },
  {
    path: '/device',
    name: 'device',
    component: () => import('@/views/nativepages/DevicePage.vue'),
  },
  {
    path: '/browser',
    name: 'browser',
    component: () => import('@/views/nativepages/BrowserPage.vue'),
  },
  {
    path: '/file-system',
    name: 'filesystem',
    component: () => import('@/views/nativepages/FileSystemPage.vue'),
  },
  {
    path: '/status-bar',
    name: 'statusbar',
    component: () => import('@/views/nativepages/StatusBarPage.vue'),
  },
  {
    path: '/preferences',
    name: 'preferences',
    component: () => import('@/views/nativepages/PreferencesPage.vue'),
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('@/views/nativepages/SharePage.vue'),
  },
  {
    path: '/text-zoom',
    name: 'textzoom',
    component: () => import('@/views/nativepages/TextZoomPage.vue'),
  },
  {
    path: '/screen-orientation',
    name: 'screenorientation',
    component: () => import('@/views/nativepages/ScreenOrientationPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.body.classList.add('transition-active');
  next();
});

export default router
