const root = new Vue({
    el: '#root',
    data: {
        tasks:[
            'Fare le valigie',
            'Comprare pane',
            'Abbeverare piante',
            'Ordinare il dolce',
        ], 
    },
    methods: {
       deletedTask(i){
           this.tasks.splice(i, 1);
       }
    },
});