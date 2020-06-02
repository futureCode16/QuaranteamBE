export default {

    routes: [
        {
            path: '/studenttask',
            name: 'studenttask',
            component: resolve => require(['@/components/Modules/Admin/Tasking.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/test',
            name: 'test',
            component: resolve => require(['@/components/Buttons/FabSpeedDial.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        }
    ]

}