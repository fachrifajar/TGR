<script setup lang="ts">
import { useThemeStore } from '../stores/theme';
import { computed } from 'vue';

const router = useRouter();
const themeStore = useThemeStore();
const route = useRoute();


const navigateToRoute = () => {
    if (route.path === '/auth/login' || route.path === '/auth/register') {
        router.push('/');
    } else {
        router.push('/auth/login');
    }

};

const buttonLabel = computed(() => {
    return route.path === '/auth/login' || route.path === '/auth/register' ? 'Home' : 'Login';
});
</script>

<template>
    <header :class="`${themeStore.isDarkTheme ? 'dark' : ''} sticky`">
        <div class="p-2 bg-background dark:bg-background-dark dark:text-textPrimary-dark text-textPrimary">
            <div
                class="py-5 lg:px-10 md:px-10 px-3 bg-tertiary dark:bg-tertiary-dark rounded-full w-full h-12 font-semibold flex items-center justify-between">
                <p class="dark:text-white text-black">PropTopia</p>
                <div class="flex items-center lg:gap-2">
                    <Button :label="buttonLabel" :onClick="navigateToRoute" />
                    <button class="ml-2" @click="themeStore.toggleTheme">
                        <IconsLight v-if="themeStore.isDarkTheme" customClass="text-2xl text-white" />
                        <IconsDark v-else customClass="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>


