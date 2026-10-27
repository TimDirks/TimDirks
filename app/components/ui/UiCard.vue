<script lang="ts" setup>
defineProps({
    body: String,
    icon: String,
    title: String,
});
</script>

<template>
    <div class="rounded-xl border border-slate-800 bg-gray-950 p-4 transition duration-300 hover:shadow-md hover:shadow-gray-800">
        <div class="mb-4 text-center">
            <slot name="title">
                <div class="inline-flex gap-4 border-b px-2 pb-2 uppercase">
                    <Icon
                        v-if="icon"
                        :name="icon"
                        size="24"
                    />

                    {{ title }}
                </div>
            </slot>
        </div>

        <div class="whitespace-pre-line">
            <slot>
                {{ body }}
            </slot>
        </div>
    </div>
</template>
