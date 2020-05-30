export default {

    routes: [
        {
            path: '/portal',
            name: 'portal',
            component: resolve => require(['@/components/Modules/Portal.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        }
    ]

}