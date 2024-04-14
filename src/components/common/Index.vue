<template>
    <div class="bg-white pb-8 sm:pb-12 lg:pb-12">
        <div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
            <div
                class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div>
                    <div class="flex">
                        <img class="h-16 w-auto" src="/assets/resource/media/logo.png" alt="Logo" />
                        <p class="text-3xl self-center">tqm Meteo</p>
                    </div>
                    <div class="mt-10">
                        <div class="mt-6 sm:max-w-xl">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">A MultMeteo Site
                            </h1>
                            <p v-for="item in Texture.texture" class="mt-6 text-xl text-gray-500">{{ item.value }}</p>
                        </div>
                        <form action="#" class="mt-12 sm:flex sm:w-full sm:max-w-lg">
                            <div class="mt-4 sm:mt-0 ">
                                <button style="background-color:var(--c-brand)"
                                    class="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10">Observation</button>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-3">
                                <button
                                    class="block w-full rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white shadow  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10">Map</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div class="hidden sm:block">
                        <div
                            class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                        <svg class="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0" width="404" height="392"
                            fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                        </svg>
                    </div>
                    <div class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                        <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                            src="/assets/resource/media/rt_113_202208061639.png"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Texture from '../../assets/data/text/index.json'

</script>