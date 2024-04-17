import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        component: () =>
            import('../components/common/Header.vue'),
        children: [{
            path: '',
            component: () =>
                import('../components/common/Index.vue')
        }]
    },
    {
        path: '/observation',
        component: () =>
            import('../components/common/Header.vue'),
        children: [{
            path: '',
            component: () =>
                import('../components/common/Observation.vue')
        }]
    },
    {
        path: '/models',
        component: () =>
            import('../components/common/Header.vue'),
        children: [{
            path: '',
            component: () =>
                import('../components/common/Models.vue')
        }]
    },
    {
        path: '/map',
        component: () =>
            import('../components/common/Header.vue'),
        children: [{
            path: '',
            component: () =>
                import('../components/map/baseMap.vue')
        }]
    },
    {
        path: '/radar',
        component: () =>
            import('../components/common/Header.vue'),
        children: [{
            path: '',
            component: () =>
                import('../components/common/Radar.vue')
        }]
    },
    ]
})

export default router