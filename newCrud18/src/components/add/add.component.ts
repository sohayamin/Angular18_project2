import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../../app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  addForm!: FormGroup

  em = inject(EmployeeService);

  constructor(private route:Router) {

  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      email: new FormControl()
    })
  }

  OnSubmit() {
    console.log(this.addForm.value);
    this.em.saveEmployee(this.addForm.value).subscribe((res: any)=> {
      alert("Data added successfully");
      this.route.navigateByUrl("list");

    });

  }

}
