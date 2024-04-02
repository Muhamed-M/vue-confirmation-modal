# Requirements

vue version >=3.0.0

# Installation

```bash
npm install --save vue-confirmation-modal
```

# Add to Vue

```ts
// main.ts
import ConfirmationModal from 'vue-confirmation-modal';

app.use(ConfirmationModal);
```

# Usage

```html
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
```
