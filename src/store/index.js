import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menu from './modules/menu.js'
import blocks from './modules/blocks.js'

export const store = new Vuex.Store({
  modules: {
		menu,
        blocks
	},
	strict: process.env.NODE_ENV !== 'production'
})