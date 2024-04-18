<template>
    <div>
        <main class="flex-1">
            <div class="py-8 xl:py-10">
                <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-7xl xl:grid-cols-9">
                    <div class="xl:col-span-6 xl:border-r xl:border-gray-200 xl:pr-8">
                        <div>
                            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                                <div>
                                    <h1 class="text-2xl font-bold text-gray-900">SSR</h1>
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
                    <a-config-provider :theme="{
                                        token: {
                                            fontFamily: 'PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;',
                                        },
                                    }">
                        <div class="xl:col-span-3 xl:border-r xl:border-gray-200 xl:pr-8">
                            <aside class="hidden xl:block xl:pl-3">
                                <div class="space-y-5">
                                    数据时间：{{ }}
                                </div>
                                <div class="mt-6 space-y-4 border-t border-gray-200 py-6">
                                    <div class="align-center flex relative mb-5">
                                        雷达类型
                                        <a-select class="ml-10" ref="select" v-model:value="radar_type"
                                            style="width: 120px" :options="radar_type_list"></a-select>
                                    </div>
                                    <div class="items-center  flex relative  mb-5">
                                        产品{{ }} <a-select class="ml-10" ref="select" v-model:value="product"
                                            style="width: 120px">
                                            <a-select-option v-for="item in PARProducts" :value="item.label"
                                                :key="item.label">
                                                {{ item.label }}
                                            </a-select-option></a-select>
                                    </div>
                                    <div class="items-center flex relative">
                                        站点{{ }} <a-select class="ml-10" ref="select" v-model:value="station"
                                            style="width: 220px" >
                                            <a-select-option v-for="item in radarStation" :value="item.RADARNAME"
                                                :key="item.RADARCODE">
                                                {{ item.RADARNAME + " " + item.RADARCODE }}
                                            </a-select-option>
                                        </a-select>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </a-config-provider>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import { ref } from 'vue';
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return {
            radarStation,
            radarProducts,
            product: ref("CR"),
            radar_type: ref('PAR'),
            radar_type_list: [{ label: 'CINRAD', value: 'CINRAD' }, { label: 'PAR', value: ',PAR' }],
            pic_url: ref(""),
            CINRADProducts: radarProducts['CINRAD'],
            PARProducts: radarProducts['PAR'],
            station: ref('PlaceholderRADA'),
        }
    },
});
</script>