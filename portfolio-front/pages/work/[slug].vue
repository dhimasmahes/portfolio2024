<template>
    <main class="container mx-auto max-w-4xl w-full snap-mandatory snap-y">
        <section class="pt-10" v-if="loading">
            <p>Loading...</p>
        </section>

        <section class="pt-10" v-else-if="project">
            <div class="company">
                <h2 class="font-sans font-bold text-xl text-right">
                    {{ project.companyTitle }}
                </h2>
            </div>
            <div class="font-sans flex flex-row mt-4">
                <div class="mr-10">
                    <h3 class="font-bold text-sm">INDUSTRY</h3>
                    <ul class="text-base">
                        <li>{{ project.industry }}</li>
                    </ul>
                </div>
                <div class="mr-10">
                    <h3 class="font-bold text-sm">MEDIA</h3>
                    <ul class="text-base">
                        <li>{{ project.media }}</li>
                    </ul>
                </div>
                <div class="mr-10">
                    <h3 class="font-bold text-sm">ROLE</h3>
                    <ul class="text-base">
                        <li>{{ project.roles }}</li>
                    </ul>
                </div>
            </div>

            <div v-for="(proj, index) in project.project" :key="index" class="mt-4 mb-10">
                <h3 class="font-serif text-lg font-bold">
                    {{ proj.projectTitle }}
                </h3>
                <p class="font-sans text-base text-justify">
                    {{ proj.projectSummary }}
                </p>
                <figure class="w-full">
                    <img v-if="proj.projectImg" :src="baseUrl + proj.projectImg.url" alt="" />
                </figure>
                <div class="font-sans flex flex-row mt-4">
                    <div v-if="proj.designTools" class="mr-10">
                        <h3 class="font-bold text-sm">DESIGN TOOLS</h3>
                        <ul class="text-base">
                            <li>{{ proj.designTools }}</li>
                        </ul>
                    </div>
                    <div v-if="proj.codingTools" class="mr-10">
                        <h3 class="font-bold text-sm">CODING/WEB MANAGEMENT TOOLS</h3>
                        <ul class="text-base">
                            <li>{{ proj.codingTools }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section v-else>
            <p>No project found.</p>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getStrapiGraph } from '~/composables/useStrapi';

const project = ref(null);
const loading = ref(true);
const { getProjectContent, baseUrl } = getStrapiGraph();
const route = useRoute();

onMounted(async () => {
    const slug = route.params.slug; // Assuming slug is passed as a route param

    try {
        project.value = await getProjectContent(slug);
    } catch (error) {
        console.error('Error fetching project:', error);
    } finally {
        loading.value = false; // Set loading to false after fetch attempt
    }
});
</script>
