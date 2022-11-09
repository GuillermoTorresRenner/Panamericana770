<template>
  <q-page>
    <h4 class="text-center text-purple">Haberes del Edificio</h4>

    <q-card class="bg-purple-1 q-mx-xl">
      <q-card-section>
        <p>
          En esta sección encontrará información acerca de los Ingresos del
          edificio por prestaciones del cartel y de los gastos realizados por la
          Administración conforme a lo estipulado en los Estatutos.
        </p>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <q-card-section>
        <p>
          Puede consultar los términos del contrato del cartel en el siguiente
          link
        </p>
        <div class="row justify-center">
          <q-btn
            color="purple"
            icon="ion-eye"
            label="Contrato Cartel"
            @click="oops"
          />
        </div>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <q-card-section>
        <p>
          Puede consultar los Ingresos y Egresos de dinero del cartel en el
          siguiente link
        </p>
        <div class="row justify-center">
          <q-btn
            color="purple"
            icon="ion-eye"
            label="Ingresos y Egresos"
            @click="go"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();

function go() {
  window.open(
    "https://docs.google.com/spreadsheets/d/1JjIy2ApIWBvQVW5FzqHpJm5TekacgUHQO2dqM93s128/edit?usp=sharing",
    "_blanc"
  );
}
function oops() {
  $q.notify({
    color: "red",
    message: "Contrato no dísponible aún",
    caption: "No traspasado por la directiva anterior",
    icon: "ion-warning",
    position: "center",
  });
}
</script>
