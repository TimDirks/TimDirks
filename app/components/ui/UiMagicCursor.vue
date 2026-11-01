<script lang="ts" setup>
import {gsap} from 'gsap';

const cursor = ref<HTMLDivElement>();
const quickToX = ref<Function>();
const quickToY = ref<Function>();
const cursorHidden = ref<boolean>(true);

const quickToOptions = {
    duration: 0.2,
    ease: 'power3',
};

// Simple function to hide the cursor initially and show it again after the first mouse move.
// This is needed as initially the cursor will be displayed in the top left corner and then on
// first mouse move it would quickly travel from that corner to the mouse which looks weird.
function showCursor(event: MouseEvent) {
    cursorHidden.value = false;

    quickToX.value(event.clientX, event.clientX);
    quickToY.value(event.clientY, event.clientY);

    window.removeEventListener('mousemove', showCursor);
}

onMounted(() => {
    if (!cursor.value) {
        return;
    }

    quickToX.value = gsap.quickTo(cursor.value, 'x', quickToOptions);
    quickToY.value = gsap.quickTo(cursor.value, 'y', quickToOptions);

    const followMouse = (event: MouseEvent) => {
        quickToX.value(event.clientX);
        quickToY.value(event.clientY);
    };

    window.addEventListener('mousemove', showCursor);
    window.addEventListener('mousemove', followMouse);
});
</script>

<template>
    <div
        id="magic-cursor"
        ref="cursor"
        :class="{ 'opacity-0': cursorHidden }"
        class="pointer-events-none fixed hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-opacity duration-300 lg:block"
    />
</template>
