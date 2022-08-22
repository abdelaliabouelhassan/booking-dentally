import { createRouter, createWebHistory } from 'vue-router'

//componentes
import index from '@/components/views/index.vue'
import Start from '@/components/views/start.vue'
import SelectDentist from '@/components/views/SelectDentist.vue'
import AvailableSlots from '@/components/views/AvailableSlots.vue'
import PickDate from '@/components/views/PickDate.vue'
import Details from '@/components/views/Details.vue'
import Confirmation from '@/components/views/Confirmation.vue'
const routes = [
  { path: '/', component: Start },
  { path: '/dashboard', component: Start, name: 'index' },
  { path: '/select-treatment', component: index, name: 'select-treatment' },
  { path: '/select-dentist', component: SelectDentist, name: 'select-dentist' },
  { path: '/available-slots', component: AvailableSlots, name: 'available-slots' },
  { path: '/pick-date', component: PickDate, name: 'pick-date' },
  { path: '/details', component: Details, name: 'details' },
  { path: '/confirmation', component: Confirmation, name: 'confirmation' },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;