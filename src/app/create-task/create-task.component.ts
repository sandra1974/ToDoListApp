import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../shared/task.service";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

   @Input() taskDetails = { name: '', description: '', created: Date}

  constructor(
    public taskService: TaskService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addTask(dataTask) {
    this.taskService.createTask(this.taskDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-task'])
    })
  }

}