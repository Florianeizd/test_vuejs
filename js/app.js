
new Vue({
    el: '#app',
    data: {
        message: 'Bienvenue sur mon site !',
        link :'http://portfolio-florianeizard.alwaysdata.net',
        success: true,
        persons: ['1', '2','3']
    },
    methods: {
        close: function(){
            this.message = "Clique ici"
            this.success = false
        }
    }
})
