import { createRouter, createWebHistory } from 'vue-router'
import Arnold from './Arnold.vue'
import DivRom from './DivRom.vue'
import RNew from './RNew.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [{
        name: 'Home',
        path: '/W',
        component: Arnold 

    }, {
        name: 'About',
        path: '/@',
        component: DivRom
        
    },
    {
        name: 'NewPages',
        path: '/hello',
        component: RNew
        
    }


]
})

export default router