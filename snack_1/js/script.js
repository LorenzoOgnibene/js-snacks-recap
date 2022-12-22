
/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/


const { createApp } = Vue;

createApp({
    data(){
        return{
            randomNum : [],
    }
    },

    methods:{
           getRandomNum(){
               
                   axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                   .then((response) => {
                       this.randomNum.push(response.data.response);
                       console.log(this.randomNum);
                    })
               
            }
        
    },
}).mount('#app')

