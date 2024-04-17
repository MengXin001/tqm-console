<template>
    <div class="flex min-h-full">
        <div class="relative lg:inset-y-0 lg:flex lg:w-64">
            <div class="flex min-h-0 flex-1 flex-col">
                <div class="flex flex-1 flex-col overflow-y-auto bg-white xl:border-r xl:border-gray-200 rounded-md">
                    <nav class="flex-1 px-2 py-4">
                        <div class="space-y-1">
                            <a class="font-bold px-4">单站</a>
                            <a v-for="item in Products.singleProducts" :key="item.label" :href="item.href"
                                :class="[item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'group flex items-center px-4 py-2 text-sm font-medium rounded-md']"
                                :aria-current="item.current ? 'page' : undefined">
                                {{ item.label }}
                            </a>
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
        <div>
            <main class="flex-1">
                <div class="py-8 xl:py-10">
                    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-7xl xl:grid-cols-9">
                        <div class="xl:col-span-6 xl:border-r xl:border-gray-200 xl:pr-8">
                            <div>
                                <div
                                    class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                                    <div>
                                        <h1 class="text-2xl font-bold text-gray-900">3km CAPPI</h1>
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
                                        <img
                                            :src="pic_url" />
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
import { ref } from 'vue';
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
import Products from '../../assets/data/products/radar.json'
const value = ref('广东3km CAPPI')
//BackedApi
const pic_url = "/assets/resource/media/mor202404171200.png"
const data_time = "2024/04/17/1200 (UTC)"
const warning_time = "2024年04月16日08时20分"
const warning_text = "【深圳市解除分区大雾黄色预警信号】能见度逐渐好转，深圳市气象台2024年04月16日08时20分解除盐田区和大鹏湾大雾黄色预警信号。"
const formatter = value => {
    return `+ ${(value + 1) * 6}hrs`;
};
</script>
