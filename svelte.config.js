import preprocess from "svelte-preprocess";
import firebase from "svelte-adapter-firebase";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: firebase(),
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};
