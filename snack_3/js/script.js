/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */

const { createApp } = Vue;

createApp({
    data(){
        return{
            messages : [],
            userMessage : '',
            aiMessage : '',
    }
    },

    methods:{
            getARandomMessage(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then((response) => {
                    this.aiMessage = response.data.response;
                    this.messages.push({value : 'recived', message : this.aiMessage});
                })
            },
            createUserMessage(){
                setTimeout(this.getARandomMessage(), 1)
                this.messages.push({value : 'sent', message : this.userMessage});
                this.userMessage = '';
                console.log(this.messages)
            }

    },

 
}).mount('#app')

