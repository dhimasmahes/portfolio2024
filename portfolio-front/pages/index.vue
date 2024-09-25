<template>

    <main class="container mx-auto max-w-6xl w-full snap-mandatory snap-y">
        <section class="font-serif flex flex-col h-screen py-20 snap-start">
            <div class="font-sans leading-5 text-lg text-right font-extrabold">
                Selected
                <br />
                works
            </div>
            <h1 class="font-serif text-6xl grow">
                SELECTED WORKS
                <br />
                PORTFOLIO.
            </h1>
            <ul class="font-sans leading-5 flex flex-row text-xl font-medium justify-between w-3/5">
                <li>
                    Dhimas
                    <br />
                    Maheswara
                </li>
                <li>
                    Web
                    <br />
                    Designer
                </li>
                <li>
                    2022-
                    <br />
                    2024
                </li>
            </ul>
        </section>



        <section class="font-serif py-10 snap-start">
            <ul class="text-3xl font-medium">
                <li v-for="project in projects" :key="project.slug" class="py-1 hover:underline">
                    <NuxtLink :to="`/work/${project.slug}`">{{ project.companyTitle }}</NuxtLink>
                </li>
            </ul>
        </section>

    </main>
</template>

<script setup>
import { getStrapiGraph } from '~/composables/useStrapi';

const { getProjectList, getProjectContent } = getStrapiGraph();
const projects = await getProjectList();

</script>