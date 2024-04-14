<template>
    <div class="w-80 m-4">
        <a-config-provider :theme="{
            token: {
                fontFamily: 'PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;',
            },
        }">
            <a-card style="width: 100%" title="Map Panel" :tab-list="tabList" :active-tab-key="key"
                @tabChange="key => onTabChange(key, 'key')">
                <template #customTab="item">
                    <span v-if="item.key === 'tab1'">
                        <home-outlined />
                        {{ item.tab }}
                    </span>
                </template>
                <template #extra>
                    <a @click="closeTab">Close</a>
                </template>
                <div> <!-- secondPanel.vue -->
                    <label for="name" class="block text-sm font-medium text-gray-700">Search</label>
                    <div class="mt-2 pb-3 flex">
                        <a-input style="width: 200px;" v-model="input" placeholder="输入台风编号 201822"></a-input>
                        <a-button class="ml-auto" @click="onClick" type="primary">查询</a-button>
                    </div>
                    <a-divider>当前南海及西太平洋无台风</a-divider>
                    <div class="mt-2 pb-3">
                        <p>最后更新：202317杰拉华</p>
                        <p>时间: 2023-12-18T20:00:00</p>
                    </div>
                </div>
            </a-card>
        </a-config-provider>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const tabList = [
    {
        key: 'tab1',
        tab: 'Typhoon',
    },
    {
        key: 'tab2',
        tab: 'Radar',
    },
];
const input = ref('');
const key = ref('tab1');
const noTitleKey = ref('app');
const onTabChange = (value, type) => {
    if (type === 'key') {
        key.value = value;
    } else if (type === 'noTitleKey') {
        noTitleKey.value = value;
    }
};
</script>
