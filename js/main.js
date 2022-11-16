const { createApp } = Vue;

createApp({
    data(){
        return{
            emails: [],
        }
    },
    created(){  
        for(let i = 1; i <= 10; i++) {     
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // console.log(this);
                // console.log(response.data.response);
                this.emails.push(response.data.response);
            });
        }
    }
}).mount('#app')