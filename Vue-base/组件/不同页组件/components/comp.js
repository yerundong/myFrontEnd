var comp = {
    data() {
        return {
            msg: '我是comp'
        }
    },
    props: {

    },
    created() {

    },
    methods: {
        alert() {
            alert(this.msg)
        }
    },
    template: `
        <div class="comp-wrap">
            <link rel="stylesheet" href="./components/comp.css">
            <p @click="alert">{{msg}}</p>	
        </div> 
    `,
};