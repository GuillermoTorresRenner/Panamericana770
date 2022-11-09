<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Av. Eduardo Frei Montalva 770 </q-toolbar-title>

        <q-btn
          color="primary"
          icon="login"
          @click="onClick"
          unelevated
          to="/login"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Opciones </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Inicio",
    caption: "Página de inicio",
    icon: "home",
    link: "/",
  },
  {
    title: "Estatuto de Convivencia",
    caption: "Normas de la comunidad",
    icon: "book",
    link: "https://docs.google.com/document/d/18ROmywRCQhJqNTg0mS67_BjXRjWv7qQr/edit?usp=sharing&ouid=109657474084320026023&rtpof=true&sd=true",
  },
  {
    title: "Estatuto de la Administración",
    caption: "Normas de la directiva",
    icon: "ion-help-buoy",
    link: "https://docs.google.com/document/d/1LeqmueDwBsGimfCsPPkYAprafKST1LIK/edit?usp=sharing&ouid=109657474084320026023&rtpof=true&sd=true",
  },
  {
    title: "Gastos Comunes",
    caption: "Seguimiento de cobranzas y pagos",
    icon: "ion-wallet",
    link: "/gastos-comunes",
  },
  {
    title: "Haberes",
    caption: "Cobranza de cartel y proyectos de mejora y manuntención",
    icon: "ion-cash",
    link: "/haberes-edificio",
  },
  {
    title: "Contacto",
    caption: "Dudas, quejas y sugerencias",
    icon: "forum",
    link: "/contacto",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
