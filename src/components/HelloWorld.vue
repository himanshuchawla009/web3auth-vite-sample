<script setup>
import { ref, onMounted } from 'vue'
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3authFactory } from "../web3authFactory";

defineProps({
  msg: String
});

const count = ref(0);
const canConnect = ref(false);

const connect = async () => {
  const web3auth = Web3authFactory.getWeb3AuthInstance();
  await web3auth.connect();
}

onMounted(async () => {

  try {
    const web3auth = Web3authFactory.getWeb3AuthInstance();
    await web3auth.initModal();
    canConnect.value = true;
  } catch (error) {
    console.log("error", error);
  } 
});

</script>

<template>

  <button v-if="canConnect" type="button" @click="connect">Connect</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
