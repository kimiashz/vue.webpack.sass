import style from './sass/main.sass'
import Vue from 'vue'
import routes from './js/routes'

const app = new Vue({
    el: '#app',
    data: {
      currentRoute: window.location.pathname
    },
    computed: {
      ViewComponent () {
        const matchingView = routes[this.currentRoute];
        return require('./js/pages/' + (matchingView || '404') + '.vue')
      }
    },
    render (h) {
      return h(this.ViewComponent)
    }
});