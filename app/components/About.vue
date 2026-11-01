<script lang="ts" setup>
//
</script>

<template>
    <div>
        <h3 class="mb-6 text-center">
            {{ $t('about.title') }}
        </h3>

        <div class="grid gap-4 xl:grid-cols-3">
            <UiCard
                :body="$t('about.knowledge.body')"
                :title="$t('about.knowledge.title')"
                icon="ph:brain"
            />

            <UiCard
                :body="$t('about.experience.body')"
                :title="$t('about.experience.title')"
                icon="ph:laptop"
            />

            <UiCard
                :body="$t('about.personal.body')"
                :title="$t('about.personal.title')"
                icon="ph:identification-card"
            />
        </div>
    </div>
</template>
