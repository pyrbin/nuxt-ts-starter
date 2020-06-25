<template>
  <div class="py-2 font-bold text-white bg-blue-500 rounded xl:px-4 hover:bg-blue-700">
    {{ count }} {{ test.foo }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const count = ref(0);
    const test = reactive({ foo: "bar" });
    // expose to template
    return {
      count,
      test
    };
  }
});
</script>
