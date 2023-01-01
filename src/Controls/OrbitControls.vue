<script lang="ts">
export default {
  name: "OrbitControls",
  render: () => null,
};
</script>

<script setup lang="ts">
import { Camera } from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { inject, ref, watch, type Ref } from "vue";

const props = defineProps<{
  name?: string;
}>();

const three = ref<OrbitControls | null>(null);
(inject("addControls") as (c: Ref<OrbitControls | null>) => void)(three);

const camera = inject<Camera>("parentCamera");
const canvas = inject<Ref<HTMLCanvasElement>>("canvas");

watch(canvas!, () => {
  three.value = new OrbitControls(camera, canvas!.value);
});

defineExpose({ three: three.value });
</script>
