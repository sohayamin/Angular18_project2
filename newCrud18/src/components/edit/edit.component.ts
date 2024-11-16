import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../app/services/employee.service';
import { Employee } from '../../app/models/employee';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  formObj!: Employee;
  em = inject(EmployeeService);
  constructor(private route:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.formObj = {
      id: 0,
      name: '',
      age: 0,
      email: ''
    }
    const empId = this.route.snapshot.params['id'];
    this.getEmp(empId);
  }

  getEmp(empId:number) {
    this.em.getEmployee(empId).subscribe((res:any) => {
      this.formObj =  res;
      console.log('happpy',res);
    })
  }

  onUpdate() {
    this.em.updateEmployee(this.formObj).subscribe((res:any) => {
      alert("Data updated successfully");
      this.router.navigateByUrl('list');
      // console.log('happpy',res);
    })
  }

}
