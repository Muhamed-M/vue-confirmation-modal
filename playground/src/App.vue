<script setup lang="ts">
import { confirmationModal } from 'vue-confirmation-modal';

const handleDelete = async () => {
  try {
    const confirmed = await confirmationModal.show({
      text: 'This action will permanently delete this record! Is it ok to proceed?',
      primaryBtnText: 'Confirm'
    });

    if (!confirmed) return;

    alert('Deleted successfully');
  } catch (error) {
    alert('Failed to delete');
  }
};
</script>

<template>
  <main>
    <button @click="handleDelete">delete something</button>
  </main>
</template>

<style>
body {
  background-color: #232323;
}
main {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
