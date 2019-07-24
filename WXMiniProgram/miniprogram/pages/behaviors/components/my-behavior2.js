// my-behavior.js
module.exports = Behavior({
    behaviors: [],
    properties: {
        myBehaviorProperty: {
            type: String
        }
    },
    data: {
        behMsg2: 'Behavior2',
        info: 'Behavior2',
        obj:{
          Behavior2: 1,
          tip: 1
        }
    },
    attached() {},
    methods: {
        behMethod2() {
            console.log('behMethod2')
        }
    }
})