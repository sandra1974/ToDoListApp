import { TaskService } from '../shared/task.service';
import { Component, OnInit, Output, EventEmitter, Input, Pipe, PipeTransform, Injectable  }  from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  Task: any = [];
  page = 1;  
  
  
  
  
  constructor(public taskService: TaskService ) { 

  }

  ngOnInit() {
    this.loadTasks()
  }
 
  loadTasks() {
    return this.taskService.getTasks().subscribe((data: {}) => {
      this.Task = data;
    })
  }

  key: string = 'name'; 
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
    p: number = 1;
  
  
  deleteTask(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.taskService.deleteTask(id).subscribe(data => {
        this.loadTasks()
      })
    }
  }  

}


@Pipe({
    name: "arrayFilter"
})

export class FilterPipe implements PipeTransform {
   transform(value:any[],searchString:string ){

       if(!searchString){
         console.log('no search')
         return value  
       }

       return value.filter(it=>{   
           const id = it.id.toString().includes(searchString) 
           const name = it.name.toLowerCase().includes(searchString.toLowerCase())
           const description = it.description.toLowerCase().includes(searchString.toLowerCase())
		    const created = it.created.toString().includes(searchString) 
           console.log( id + name + description + created);
           return (id + name + description + created );      
       }) 
    }
}

