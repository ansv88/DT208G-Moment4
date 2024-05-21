import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filterValue: string = "";
  sortColumn: keyof Course | "" = "";
  sortAscending: boolean = true;

  constructor(private coursesService: CoursesService) {}

  //Hämtar kursdata från services och initialiserar courses och filteredCourses
  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  //Filtrerar kurser baserat på inmatat värde i sökrutan (kurskod eller kursnamn)
  filterCourses(): void {
    const filterValueLower = this.filterValue.toLowerCase();
    this.filteredCourses = this.courses.filter(
      (course) =>
        course.code.toLowerCase().includes(filterValueLower) ||
        course.coursename.toLowerCase().includes(filterValueLower)
    );
  }

  //Sorterar kurser baserat på vilket kolumnnamn(th) som klickats med växlande sortering (stigande eller fallande)
  sortCourses(column: keyof Course): void {
    //Kontrollerar om samma kolumn har klickats för sortering
    if (this.sortColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortColumn = column;
      this.sortAscending = true;
    }

    //Sorterar de filtrerade kurserna
    this.filteredCourses.sort((a, b) => {
      const comparison = a[column].localeCompare(b[column], 'sv', {
        numeric: true,
        sensitivity: 'base',
      });
      return this.sortAscending ? comparison : -comparison;
    });
  }
}
