import RouterTitle from './RouterTitle.vue'

export default {
    install(app: object){
        app.component(
            'RouterTitle',
            RouterTitle
          )
    }
}