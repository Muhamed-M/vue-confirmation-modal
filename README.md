# Vue Confirmation Modal
<img width="477" alt="Screenshot 2024-04-03 at 23 53 40" src="https://github.com/Muhamed-M/vue-confirmation-modal/assets/80977652/fc3e69d0-20c8-4093-8cf1-59b7d3887231">
<img width="477" alt="Screenshot 2024-04-03 at 23 54 18" src="https://github.com/Muhamed-M/vue-confirmation-modal/assets/80977652/3694bfec-f0b3-4d32-8521-8b2b2700f71b">

A Vue 3 plugin for easily integrating promise based confirmation modals into your application, with support for theme customization and global configuration.

## Requirements

Vue version >=3.0.0

## Installation

Install the package using npm:

```bash
npm install vue-confirmation-modal
```

Or using yarn:

```bash
yarn add vue-confirmation-modal
```

## Setup

Add ConfirmationModal to your Vue application in your main entry file (typically main.ts or main.js):

```ts
import { createApp } from 'vue';
import App from './App.vue';
import ConfirmationModal from 'vue-confirmation-modal';
import 'vue-confirmation-modal/dist/style.css'; // import styles

const app = createApp(App);

app.use(ConfirmationModal, {
  // Global configuration options
  title: 'Are you sure?',
  theme: 'auto' // 'auto' | 'light' | 'dark' (auto defaults to system preference)
});

app.mount('#app');
```

## Usage

Use the confirmationModal object to display a modal. The show method returns a promise that resolves to true if the user confirms or false if the user rejects or closes the modal.

```html
<script setup lang="ts">
  import { confirmationModal } from 'vue-confirmation-modal';

  const handleDelete = async () => {
    try {
      const confirmed = await confirmationModal.show({
        // these options will override default
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
```

## Options

You can customize the confirmation modal by providing options either globally (when adding the plugin to your app) or locally (when calling the show method).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.
