// my-behavior.js
module.exports = Behavior({
    behaviors: [],
    properties: {
        myBehaviorProperty: {
            type: String
        }
    },
    data: {
        behMsg1: 'Behavior1',
        info: 'Behavior1',
        obj:{
          Behavior1: 1,
          tip: 1
        }
    },
    attached() {},
    methods: {
        behMethod() {
            console.log('behMethod1')
        }
    }
})