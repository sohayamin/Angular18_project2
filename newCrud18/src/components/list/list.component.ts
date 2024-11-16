import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../app/services/employee.service';
import { Employee } from '../../app/models/employee';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  empData: Employee[]= []

  em = inject(EmployeeService)

  ngOnInit() {
    this.getAllEmp();
  }

  getAllEmp() {
    this.em.getAllEmployees().subscribe((res:any) => {
      this.empData = res
      console.log(this.empData);
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete this record?");
    if(isDelete) {
      this.em.deleteEmployee(id).subscribe((res: any) => {
        alert("Data is deleted successfully");
        this.getAllEmp();
      }) 
    }   
  }

}
