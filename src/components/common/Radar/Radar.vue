<template>
    <div class="flex min-h-full">
        <div class="relative lg:inset-y-0 lg:flex lg:w-64">
            <div class="flex min-h-0 flex-1 flex-col">
                <div class="flex flex-1 flex-col overflow-y-auto bg-white xl:border-r xl:border-gray-200 rounded-md">
                    <nav class="flex-1 px-2 py-4">
                        <div class="">
                            <div class="space-y-2">
                                <RadioGroup v-model="value">
                                    <RadioGroupOption as="template" v-slot="{ active, checked }" value="SSR">
                                        <div :class="[
                                    active
                                        ? ''
                                        : '',
                                    checked ? 'bg-gray-700 text-white' : 'bg-white ',
                                ]" class="relative flex cursor-pointer px-4 py-2 font-medium rounded-md focus:outline-none">
                                            <div class="flex w-full items-center justify-between">
                                                <div class="flex items-center">
                                                    <div class="text-black ">
                                                        <RadioGroupLabel as="p"
                                                            :class="checked ? 'text-white' : ' text-black '"
                                                            class="font-bold ">
                                                            单站
                                                        </RadioGroupLabel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </RadioGroupOption>
                                </RadioGroup>
                            </div>
                        </div>
                        <div class="mt-6">
                            <p class="px-4 font-bold text-black">组网</p>
                            <div class="space-y-2">
                                <RadioGroup v-model="value">
                                    <RadioGroupOption as="template" v-for="item in Products.crProducts"
                                        :key="item.label" :value="item.label" v-slot="{ active, checked }">
                                        <div :class="[
                                    active
                                        ? ''
                                        : '',
                                    checked ? 'bg-gray-700 text-white' : 'bg-white ',
                                ]" class="relative flex cursor-pointer px-4 py-2 text-sm font-medium rounded-md focus:outline-none">
                                            <div class="flex w-full items-center justify-between">
                                                <div class="flex items-center">
                                                    <div class="text-sm">
                                                        <RadioGroupLabel as="p"
                                                            :class="checked ? 'text-white' : 'text-gray-900'"
                                                            class="font-medium">
                                                            {{ item.label }}
                                                        </RadioGroupLabel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </RadioGroupOption>
                                </RadioGroup>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <SingleStationRadar v-if="value == '全省单站'"/>
        <div v-else>
            <main class="flex-1">
                <div class="py-8 xl:py-10">
                    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-7xl xl:grid-cols-9">
                        <div class="xl:col-span-6 xl:border-r xl:border-gray-200 xl:pr-8">
                            <div>
                                <div
                                    class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                                    <div>
                                        <h1 class="text-2xl font-bold text-gray-900">{{value}}</h1>
                                    </div>
                                    <div class="mt-4 flex space-x-3 md:mt-0">
                                        <button type="button"
                                            class="inline-flex justify-center bg-blue-500 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black-700 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                            <span class="text-white ">播放</span>
                                        </button>
                                        <button type="button"
                                            class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                            <span class="">停止</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="py-3 xl:pt-6 xl:pb-0">
                                    <div class="prose max-w-none">
                                        <img :src="pic_url" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xl:col-span-3 xl:border-r xl:border-gray-200 xl:pr-8">
                            <aside class="hidden xl:block xl:pl-3">
                                <div class="space-y-5">
                                    数据时间：{{ data_time }}
                                </div>
                                <div class="mt-6 space-y-4 border-t border-gray-200 py-6">
                                    <div class="flex items-center space-x-2">
                                        <span class="font-bold text-red-600">当前生效预警</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm font-medium text-gray-900">{{ warning_text }}</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-sm font-medium text-gray-900">发布于：{{ warning_time }}</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
// import 'ant-design-vue/dist/reset.css'
import SingleStationRadar from './SingleStationRadar.vue';
import { ref } from 'vue';
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
import Products from '../../../assets/data/products/crRadar.json'
const value = ref('SSR')
//BackedApi
const pic_url = ""
const data_time = ""
const warning_time = ""
const warning_text = ""
</script>
