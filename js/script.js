const root = new Vue({
    el: '#root',
    data: {
        newTask:'',
        tasks:[
            'Fare le valigie',
            'Comprare pane',
            'Abbeverare piante',
            'Ordinare il dolce',
            'Lavare auto',
        ], 
    },
    methods: {
       deletedTask(i){
           this.tasks.splice(i, 1);
       },
       addTask() {
        if(this.newTask.trim()){
            this.tasks.push(this.newTask);
        }
        this.newTask = '';
       },
    },
});