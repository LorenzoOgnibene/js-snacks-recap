/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */

const { createApp } = Vue;

createApp({
    data(){
        return{
            numbers : [],
            userNumber : 0,
            sum : 0,
    }
    },

    methods:{
            getRandomNumbers(){
                axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userNumber}`)
                .then((response) => {
                    this.numbers.push(response.data.response)
                    console.log(this.numbers)
                })
            
            },
            getSumNumbers(){
                for(let i = 0; i < this.numbers.length; i++){
                    this.sum = this.sum + parseInt(this.numbers[i]);
                }
                return this.sum
            }

    },
    
 
}).mount('#app')

