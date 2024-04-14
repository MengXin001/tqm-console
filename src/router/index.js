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
    ]
})

export default router