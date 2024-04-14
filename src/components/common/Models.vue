<template>
    <div class="flex min-h-full">
        <div class="relative lg:inset-y-0 lg:flex lg:w-64">
            <div class="flex min-h-0 flex-1 flex-col">
                <div class="flex flex-1 flex-col overflow-y-auto bg-white xl:border-r xl:border-gray-200 rounded-md">
                    <nav class="flex-1 px-2 py-4">
                        <div class="space-y-1">
                            <a class="font-bold px-4">数值预报</a>
                            <a v-for="item in Models" :key="item.label" :href="item.href"
                                :class="[item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'group flex items-center px-4 py-2 text-sm font-medium rounded-md']"
                                :aria-current="item.current ? 'page' : undefined">
                                {{ item.label }}
                            </a>
                        </div>
                        <div class="mt-6">
                            <p class="px-4 font-bold text-black">产品</p>
                            <div class="mt-2 space-y-1">
                                <a v-for="item in Products" :key="item.label"
                                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'group flex items-center px-4 py-2 text-sm font-medium rounded-md']"
                                    :aria-current="item.current ? 'page' : undefined">
                                    {{ item.label }}
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import 'ant-design-vue/dist/reset.css'
import { ref } from 'vue'

const Models = [
    { label: 'ECMWF', current: true },
    { label: 'GFS', current: false },
    { label: 'GRAPES-GD', current: false }
]
const Products = [
    { label: 'Rain24' },
    { label: 'Wind925' },
    { label: 'Wind850 + Height500' },
    { label: 'Wind10m' },
    { label: 'Rain3' },
    { label: 'Rain6' },
    { label: 'Rain12' },
]

const formatter = value => {
    return `+ ${(value + 1) * 6}hrs`;
};
</script>
