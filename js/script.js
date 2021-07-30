const root = new Vue({
    el: '#root',
    data: {
        newTask:'',
        showInput: false,
        searchTerm: '',
        tasks:[
            'Fare le valigie',
            'Comprare pane',
            'Annaffiare piante',
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
            this.toggleInput();
        } 
        this.newTask = '';
       },
       toggleInput(){
           this.showInput = !this.showInput;
           this.newTask = '';
       },
       showItem(task){
        if(!this.searchTerm.trim()) return true;
        const filter = this.searchTerm.trim().toLowerCase();
        task = task.toLowerCase();
        return task.includes(filter);
       },
    }, 
});