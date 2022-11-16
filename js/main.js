const { createApp } = Vue;

createApp({
    data(){
        return{
            message: ''
        }
    },
    methods: {

    },
    created(){       
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // console.log(this);
            // console.log(response.data.response);
            this.message = response.data.response;
        })
    }
}).mount('#app')