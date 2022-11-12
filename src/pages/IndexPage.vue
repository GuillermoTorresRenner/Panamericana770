<template>
  <q-page>
    <h4 class="text-center text-purple">Benvenid@ a la web del Edificio</h4>
    <q-card class="bg-purple-1 q-mx-xl">
      <q-card-section>
        <p>
          El objeto de este sistema es permitir comunicación frecuente, oportuna
          y en tiempo real acerca de:
        </p>
        <ul>
          <li>Publicación de las normativas de convivencia</li>
          <li>Noticias del edificio</li>
          <li>Inquietudes, quejas y sugerencias de la comunidad</li>
          <li>
            Publicación de los INGRESOS y EGRESOS de los dineros comunales
          </li>
          <li>Publicación de los pagos de gastos comunes</li>
          <li>
            Citaciones a la comunidad a asambleas Regulares y Extraordinarias
          </li>
        </ul>
      </q-card-section>
    </q-card>
    <h4 class="text-center text-purple">Comunicados</h4>
    <q-card
      class="bg-green-1 q-mx-xl q-my-md"
      v-for="c in comunicados"
      :key="c.id"
    >
      <q-card-section>
        <h5 class="text-center">{{ c.titulo }}</h5>
        <p class="caption"><strong>Fecha Publicación:</strong> {{ c.fecha }}</p>
        <p>{{ c.texto }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { db } from "src/boot/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onMounted, ref } from "vue";
const comunicados = ref([]);
async function listar() {
  const querySnapshot = await getDocs(collection(db, "comunicados"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    comunicados.value.push(doc.data());
    comunicados.value.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else {
        return 1;
      }
    });
  });
}
onMounted(() => {
  listar();
});
</script>
