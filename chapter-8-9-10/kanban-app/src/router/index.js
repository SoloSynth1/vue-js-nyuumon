import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { authorizeToken } from './guards'

Vue.use(VueRouter)

const router = new VueRouter({ routes })
router.beforeEach(authorizeToken)

export default router
