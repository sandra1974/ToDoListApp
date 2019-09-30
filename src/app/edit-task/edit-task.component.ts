import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

 id = this.actRoute.snapshot.params['id'];
  taskData: any = {};

  constructor(
    public taskService: TaskService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.taskService.getTask(this.id).subscribe((data: {}) => {
      this.taskData = data;
    })
  }

  // Update employee data
  updateTask() {
    if(window.confirm('Are you sure, you want to update?')){
      this.taskService.updateTask(this.id, this.taskData).subscribe(data => {
        this.router.navigate(['/list-task'])
      })
    }
  }

}