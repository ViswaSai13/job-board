import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JobPostingsComponent } from './job-postings/job-postings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JobPostingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'job-board';
  // jobListItems: object[] = [];

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.jobListItems = [{ id: 1 }, { id: 2 }];
    //   console.log(this.jobListItems);
    // }, 5000);
  }
}
