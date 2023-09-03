<script setup lang="ts">
const props = defineProps<{
    label: string;
    disabled?: boolean;
    onClick?: (payload: MouseEvent) => void;
}>();
</script>

<template>
    <button @click="onClick" :class="{
        'text-white px-3 py-2 rounded-full dark:text-primary': true,
        'bg-primary hover:bg-secondary active:bg-drop-shadow duration-150 dark:bg-primary-dark dark:hover:bg-secondary-dark': !props.disabled,
        'bg-gray-400 hover:cursor-not-allowed': props.disabled,
    }" :disabled="props.disabled">
        <div class="flex items-center">
            <p class="text-sm font-semibold text-white">{{ props.label }}</p>
        </div>
    </button>
</template>
