<template>
    <div class="flex min-h-full">
        <div class="hidden relative lg:inset-y-0 lg:flex lg:w-64">
            <div class="flex min-h-0 flex-1 flex-col">
                <div class="flex flex-1 flex-col overflow-y-auto bg-white xl:border-r xl:border-gray-200 rounded-md">
                    <nav class="flex-1 px-2 py-4">
                        <div class="mt-6">
                            <p class="px-4 font-bold text-black">深圳市</p>
                            <div class="space-y-2">
                                <RadioGroup v-model="activeKey">
                                    <RadioGroupOption as="template" v-for="item in productOptions" :key="item.label"
                                        :value="item.value" v-slot="{ active, checked }">
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
                                        <h1 class="text-2xl font-bold text-gray-900">{{ productOptions.find(item =>
                                    item.value === activeKey).label }}</h1>
                                    </div>
                                    <div class="mt-4 flex space-x-3 md:mt-0">
                                        <button type="button"
                                            class="inline-flex justify-center bg-blue-500 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-black-700 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
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
                                    数据时间
                                </div>
                                <a-row class="bar">
                                        <a-col :span="12">
                                            <a-slider v-model:value="index" :min="1" :max="9" />
                                        </a-col>
                                    </a-row>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script setup>
const productOptions = [
    { label: '降水1小时', value: 'rain/rain_60_jcw.json' },
    { label: '降水3小时', value: 'rain/rain_180_jcw.json' },
    { label: '降水24小时', value: 'rain/rain_1440_jcw.json' },
    { label: '降水48小时', value: 'rain/rain_2880_jcw.json' },
    { label: '气温', value: 'temperature/temperature_jcw.json' },
    { label: '相对湿度', value: 'humidity/humidity_jcw.json' },
    { label: '雷电监测', value: 'lightningQbl/lightning_jcw.json' },
    { label: '风况', value: 'wind/wind_jcw.json' },
    { label: '能见度', value: 'visibility/visibility_jcw.json' }
]
</script>
<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'

const callBackend = function (api) {
    return axios.get(api);
};
export default defineComponent({
    data() {
        return {
            activeKey: ref('rain/rain_60_jcw.json'),
            imgList: ref([]),
            index: ref(9),

        };
    },
    created() {
        callBackend("api/szImages/" + this.activeKey).then(
            (res) => {
                this.imgList = res.data
            }).catch(function (e) {
                this.imgList = []
                error()
            }
            );
    },
    watch: {
        activeKey: function (val) {
            callBackend("api/szImages/" + this.activeKey).then(
                (res) => {
                    this.imgList = res.data
                }).catch(function (e) {
                    error()
                    this.imgList = []
                }
                );
        },
    },
    methods: {
    },
    computed: {
        pic_url: function () {
            if (this.imgList == null) {
                return ''
            } else {
                let i = 0
                if (this.imgList.length < 10) {
                    i = 10 - this.imgList.length
                }
                let trueIndex = (10 - this.index) - i
                if (trueIndex < 0) {
                    trueIndex = 0
                }
                try {
                    var url = "api/" + this.imgList[trueIndex]
                } catch {
                    var url = ""
                }
                return url
            }
        },
        time: function () {
            if (this.imgList == null) {
                return ''
            } else {
                let i = 0
                if (this.imgList.length < 10) {
                    i = 10 - this.imgList.length
                }
                let trueIndex = (10 - this.index) - i
                if (trueIndex < 0) {
                    trueIndex = 0
                }
                try {
                    var time = "Not available"
                } catch {
                    var time = "NaN"
                }
                return time
            }
        }
    },
});
</script>