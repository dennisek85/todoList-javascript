class App {
    
    constructor() {
        this.clickEvent();
        this.todoList = new List;
        this.doneList = new List;
        this.loadJSON();

    }

    loadJSON() {
        let that = this;
        JSON._load('todoItems.json')
        .then(function(data){
            that.todoList = data.todoList;
            that.todoList.renderList();
        });

        JSON._load('doneItems.json')
        .then(function(data){
            that.doneList = data.doneList;
            that.doneList.renderDoneList();
        });
    }
    
    updateTodoJSON() {
        JSON._save('todoItems.json', { "todoList": this.todoList });
    }

    updateDoneJSON() {
        JSON._save('doneItems.json', { "doneList": this.doneList });
    }

    clickEvent() {
        let that = this;
        $('#addItem').click(function(){
            let item = $('#todo-input').val();
            if(!item){
            alert('Du måste skriva något i rutan');
        }else {
            that.todoList.items.push(item);
            $('#todo-input').val('');
            that.todoList.renderList();
            that.updateTodoJSON();
        }
    
    });
        
        $(document).on('click', '.removeTodo', function(){
            let index = $(this).data('index');
            that.todoList.removeByIndex(index);
            that.todoList.renderList();
            that.updateTodoJSON();
        });
        

        $(document).on('click', '.removeDone', function(){
            let index = $(this).data('index');
            that.doneList.removeByIndex(index);
            that.doneList.renderDoneList();
            that.updateDoneJSON();   
        });
        
        $(document).on('click', '.moveToDone', function(){
            let index = $(this).data('index');
            that.todoList.removeFromListAndAddToDone(index);
            that.doneList.renderDoneList();
            that.todoList.renderList();   
            that.updateTodoJSON(); 
            that.updateDoneJSON();  
        });
        
        $(document).on('click', '.moveUp', function(){
            let index = $(this).data('index');
            that.todoList.moveUp(index);
            that.todoList.renderList();
        });

        $(document).on('click', '.moveDown', function(){
            let index = $(this).data('index');
            that.todoList.moveDown(index);
            that.todoList.renderList();
        });
    }

}
JSON._classes(App, List, Item);
let app = new App;