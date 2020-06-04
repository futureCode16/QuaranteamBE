export default {

    routes: [
        {
            path: '/center1tasks',
            name: 'center1tasks',
            component: resolve => require(['@/components/Modules/Admin/StudentTaskingCenter1.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/center2tasks',
            name: 'center2tasks',
            component: resolve => require(['@/components/Modules/Admin/StudentTaskingCenter2.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/test',
            name: 'test',
            component: resolve => require(['@/components/Modules/Portal.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        }
        ,
        {
            path: '/centertasks',
            name: 'centertasks',
            component: resolve => require(['@/components/Modules/Admin/TaskList.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        }
    ]

}