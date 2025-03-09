<script setup lang="ts">
import { computed } from 'vue';
import * as LucideIcons from 'lucide-vue-next'; // Import all Lucide icons

const { href, icon, title } = defineProps<{
  href: string;
  icon: string;
  title: string;
}>();

// Compute the icon component based on the icon name
const IconComponent = computed(() => {
  // Convert to PascalCase (e.g., "arrow-right" becomes "ArrowRight")
  const pascalCase = icon
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  // Get the component from Lucide
  return LucideIcons[`Lucide${pascalCase}`] || LucideIcons.LucideHelpCircle;
});
</script>

<style scoped>
.header-link {
      height: 50px;
      font-size: 18px;
      margin-left: var(--spacing-standard);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: var(--transition-slow);
      padding: 5px;
      border-radius: var(--border-radius-standard);
      position: relative;
      overflow: hidden;
    }

    .header-link:hover {
      transform: scale(1.02);
      background-color: var(--bg-opaque-1);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      padding: 15px;
      transition: var(--transition-slow);
    }

    .header-link:active {
      transform: scale(0.97);
      background-color: #ffffff40;
      transition: var(--transition-standard);
    }

    .header-link::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 4px;
      opacity: 0.3;
      background: var(--bg-select);
      transition: var(--transition-standard);
    }

    .header-link:hover::after {
      bottom: 0;
      opacity: 1;
    }
</style>

<template>
  <anchor class="header-link" :href="href" :aria-label="title + ' page'" nochevron nounderline>
    <component :is="IconComponent" :size="15"/>
    {{ title }}
  </anchor>
</template>
