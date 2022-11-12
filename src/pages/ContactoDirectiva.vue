<template>
  <q-page>
    <h4 class="text-center text-purple">Contacto</h4>
    <q-card class="bg-purple-1 q-mx-xl">
      <q-card-section>
        <p>
          En esta sección encontrará canales de contacto con la Administración.
        </p>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <h6 class="text-center text-purple">Alejandra - Secretaria</h6>

      <q-card-section class="row justify-center">
        <q-btn
          icon="ion-logo-whatsapp"
          color="green"
          tool
          @click="go(alejandra)"
        >
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="bg-accent"
            >Alejandra</q-tooltip
          >
        </q-btn>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <h6 class="text-center text-purple">
        Guillermo Torres Renner - Presidente
      </h6>
      <q-card-section class="row justify-center">
        <q-btn
          color="purple"
          icon="email"
          label="Enviar Correo"
          @click="go(guille.email)"
        />
      </q-card-section>
      <q-card-section class="row justify-center">
        <q-btn
          icon="ion-logo-whatsapp"
          color="green"
          tool
          @click="go(guille.what)"
        >
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="bg-accent"
            >Guillermo Torres Renner</q-tooltip
          >
        </q-btn>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <h6 class="text-center text-purple">Luis - Tesorero</h6>

      <q-card-section class="row justify-center">
        <q-btn icon="ion-logo-whatsapp" color="green" tool @click="go(luis)">
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="bg-accent"
            >Guillermo Torres Renner</q-tooltip
          >
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
const guille = {
  email: "mailto:torresrennerguillermo@gmail.com",
  what: "https://api.whatsapp.com/send?phone=+56931126146&text=Hola%20Administración!",
};
const alejandra =
  "https://api.whatsapp.com/send?phone=+56997176566&text=Hola%20Administración!";
const luis =
  "https://api.whatsapp.com/send?phone=+56995453174&text=Hola%20Administración!";
function go(what) {
  window.open(what, "_blank");
}
</script>
