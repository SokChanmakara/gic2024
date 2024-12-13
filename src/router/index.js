import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue'
import Page3 from '@/views/Page3.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1,
    },{
      path: '/Page2',
      name: 'Page2',
      component: Page2,
    },{
      path: '/Page3',
      name: 'Page3',
      component: Page3,
    },
  ],
})

export default router
