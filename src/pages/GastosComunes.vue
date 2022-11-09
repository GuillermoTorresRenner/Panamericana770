<template>
  <q-page>
    <h4 class="text-center text-purple">Gastos comunes</h4>

    <q-card class="bg-purple-1 q-mx-xl">
      <q-card-section>
        <p>
          En esta sección enontrará información acerca de los gastos comunes del
          edificio.
        </p>
        <p>
          Se le recuerda que los gastos comunes son el salario del personal de
          limpieza del edificio y el saldo de compras de insumas para tal fin,
          por lo que se implora pagarlos
          <strong>ENTRE EL 1 Y 5 DE CADA MES</strong>
        </p>
      </q-card-section>
    </q-card>
    <q-card class="bg-purple-1 q-mx-xl q-mt-xl">
      <q-card-section>
        <p>Puede consultar el estado de los pagos en el siguiente link</p>
        <div class="row justify-center">
          <q-btn
            color="primary"
            icon="ion-eye"
            label="Gastos Comunes"
            @click="go"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
function go() {
  window.open(
    "https://docs.google.com/spreadsheets/d/1iz0ryuzR4wy8c-KAmbyNajs7hupi6ggYngv8410F5RQ/edit?usp=sharing",
    "_blanc"
  );
}
</script>
