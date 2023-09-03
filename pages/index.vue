<script setup lang="ts">
import { useThemeStore } from "../stores/theme"
const themeStore = useThemeStore();


</script>

<template>
    <div :class="`${themeStore.isDarkTheme ? 'dark' : ''}`">
        <div class="h-screen bg-background dark:bg-background-dark dark:text-textPrimary-dark text-textPrimary lg:px-12 md:px-12 px-5">
            <p>main page</p>
        </div>
    </div>
</template>