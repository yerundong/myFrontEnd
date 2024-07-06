import RouterTitle from './RouterTitle.vue'
import DocReferTo from './DocReferTo.vue'

export default {
    install(app: object) {
        app.component(
            'RouterTitle',
            RouterTitle
        )
        app.component(
            'DocReferTo',
            DocReferTo
        )
    }
}