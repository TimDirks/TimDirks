<script lang="ts" setup>
definePageMeta({
    name: 'index',
});

const contentSection = ref<HTMLDivElement>();

function scrollTo(section: HTMLDivElement) {
    if (!section) {
        return;
    }

    section.scrollIntoView({
        behavior: 'smooth',
    });
}
</script>

<template>
    <div class="container mx-auto mb-4 flex grow flex-col justify-center px-4 md:mb-12">
        <Intro
            class="mb-2"
            @scroll-down="scrollTo(contentSection)"
        />

        <div
            ref="contentSection"
            class="flex scroll-mt-12 flex-col gap-y-12 md:gap-y-24"
        >
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos, eveniet illo placeat
                sapiente voluptatibus? Blanditiis eveniet fuga illum ipsa magni molestiae nisi nulla perspiciatis, qui
                reiciendis rem rerum. Ad?
            </div>
            <div>Amet dolore id ipsam numquam voluptatum. Deleniti dolores ea eveniet laudantium necessitatibus quaerat
                similique, soluta voluptatibus! Dolorem earum mollitia quidem veritatis vitae voluptate voluptatem.
                Architecto deserunt dignissimos et odit veniam?
            </div>
            <div>Eos error harum maxime minus mollitia nesciunt odio quas ut voluptate? Blanditiis culpa cum eaque
                eveniet fuga impedit inventore laudantium maiores mollitia neque nobis non odio, quia ratione suscipit
                vitae!
            </div>
            <div>Accusantium aliquid, at consequatur debitis est et excepturi exercitationem impedit minima nobis, optio
                quam qui quia ratione saepe suscipit velit. Mollitia, reiciendis sint! At commodi fuga, ipsa odit
                possimus provident?
            </div>
            <div>A ab atque blanditiis consequuntur delectus, doloremque doloribus eum ex facilis inventore itaque
                minima modi nihil officiis omnis optio pariatur praesentium quibusdam quis quo quod repellendus soluta
                tempore velit voluptates.
            </div>

            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium nostrum quasi recusandae
                sed voluptatum. Ab consectetur cumque dicta doloribus incidunt neque, nesciunt odit optio soluta ullam
                unde veritatis voluptates.
            </div>
            <div>Accusantium, animi assumenda, at corporis cumque cupiditate dolorum ducimus eaque enim esse harum iure
                maiores modi nulla obcaecati odio perspiciatis quasi quibusdam quisquam rerum similique sint soluta
                totam ullam, voluptates.
            </div>
            <div>Adipisci blanditiis eius fugit id illo laboriosam, laudantium neque nostrum, numquam optio perferendis,
                rem repudiandae vitae voluptatem voluptatum? Delectus dolore ex impedit libero maxime modi quam, qui
                quisquam sit tenetur.
            </div>
            <div>A dicta dolor ea, eligendi impedit magnam non nulla quidem quod sint tempore temporibus. Aliquam
                consequuntur cum fuga hic ipsam itaque laudantium maxime mollitia, nesciunt, odio, quidem sapiente sit
                temporibus?
            </div>
            <div>Accusamus architecto blanditiis cumque delectus dicta dolorum esse excepturi exercitationem facere
                fugiat, illum in ipsa laborum necessitatibus numquam officiis pariatur possimus quis quod, ratione rerum
                sed, suscipit tempora ut vero.
            </div>
        </div>
    </div>
</template>
