<template>
  <q-page>
    <h4 class="text-center text-purple">contacto</h4>
    <q-card class="bg-purple-1 q-mx-xl">
      <q-card-section>
        <p>
          En esta sección enontrará canales de contacto con la Administración.
        </p>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <h6 class="text-center text-purple">
        Guillermo Torres Renner - Presidente
      </h6>
      <q-card-section class="row justify-center">
        <q-btn
          color="primary"
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
  </q-page>
</template>
<script setup>
const guille = {
  email: "mailto:torresrennerguillermo@gmail.com",
  what: "https://api.whatsapp.com/send?phone=+56931126146&text=Hola%20Cervecería%20Arcanum!",
};
function go(what) {
  window.open(what, "_blank");
}
</script>
