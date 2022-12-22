/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            validPeople : [],
            userName : '',
            access : false,
    }
    },

    methods:{
           getPeople(){
                for(let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/name ')
                    .then((response) => {
                        this.validPeople.push(response.data.response);
                     })
                     console.log(this.validPeople);
                }
            },
            isInList(){
                if(this.validPeople.includes(this.userName)){
                    this.access = true;
                }else{
                    this.access = false;
                }
            }
    },
    created(){
        this.getPeople();
    }
}).mount('#app')

