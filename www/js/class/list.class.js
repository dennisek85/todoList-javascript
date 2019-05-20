class List {

    constructor() {
        this.items = [];

    }

    renderList () {
        let co = 0;
        $('.toDoList').empty();
        for(let item of this.items) {
            $('.toDoList').append(`
                <li class="list-group-item list-styling">
                <span>${item}</span>
                <div class="float-right">
                    <button type="button" class="btn btn-success btn-sm moveToDone" data-index="${co}"><i class="fa fa-check"></i></button>
                    <button type="button" class="btn btn-primary btn-sm moveUp" data-index="${co}"><i class="fa fa-arrow-up"></i></button>
                    <button type="button" class="btn btn-primary btn-sm moveDown" data-index="${co}"><i class="fa fa-arrow-down"></i></button>
                    <button type="button" class="btn btn-danger btn-sm removeTodo" data-index="${co}"><i class="fa fa-trash"></i></button>
                </div>
                </li>
            `)
        co++;
        }
    }
    
    renderDoneList () {
        let co = 0;
        $('.doneList').empty();
        for(let item of this.items) {
            $('.doneList').append(`
                <li class="list-group-item list-styling">
                    <span>${item}</span>
                    <button type="button" class="btn btn-danger btn-sm removeDone float-right" data-index="${co}"><i class="fa fa-trash"></i></button>
                </li>
            `)
        co++;
        }
    }

    removeByIndex(index) {
        return this.items.splice(index, 1);
    }
    
    removeFromListAndAddToDone(item){
        app.doneList.items.push(this.items[item]);
        this.removeByIndex(item);       
    }
    
    
    moveUp(index){
    
        let myItem = this.items[index];
    
        if( index > 0 ) {
            this.items[index] = this.items[index - 1];
            this.items[index - 1] = myItem;
        }
        return myItem;
    }

    moveDown(index){
    
        let myItem = this.items[index];
    
        if( index + 1 < this.items.length ) {
            this.items[index] = this.items[index + 1];
            this.items[index + 1] = myItem;
        }
        return myItem;
    }

}