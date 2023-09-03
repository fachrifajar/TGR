import { ref } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const storedDarkMode = localStorage.getItem("isDarkThemeTGR");
  const isDarkTheme = ref(
    storedDarkMode !== null ? JSON.parse(storedDarkMode) : false
  );

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    localStorage.setItem("isDarkThemeTGR", JSON.stringify(isDarkTheme.value));
  };

  return {
    isDarkTheme,
    toggleTheme,
  };
});
