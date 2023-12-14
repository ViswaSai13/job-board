import { Component, OnInit } from '@angular/core';
import { JobPostingsService } from './job-postings.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-postings',
  standalone: true,
  imports: [LoaderComponent, CommonModule],
  templateUrl: './job-postings.component.html',
  styleUrl: './job-postings.component.scss',
})
export class JobPostingsComponent implements OnInit {
  paginator: number = 0;
  listCount: number = 5;
  jobListIDs: number[] | any = [];
  flagLoadingData: boolean = true;
  errorLoadingData: boolean = false;
  jobDataList: object[] | any = [];

  constructor(private jpService: JobPostingsService) {}

  ngOnInit(): void {
    this.jpService.getPostings().subscribe(
      (res) => {
        this.jobListIDs = res;
        this.flagLoadingData = false;
        this.errorLoadingData = false;
        this.loadMoreJobs();
      },
      (err) => {
        console.log(err);
        this.jobListIDs.length = 0;
        this.flagLoadingData = false;
        this.errorLoadingData = true;
      }
    );
  }

  getDetails(id: number) {
    this.jpService.getDetails(id).subscribe((res) => {
      this.jobDataList.push(res);
    });
  }

  loadMoreJobs() {
    for (
      let index = this.paginator;
      index < this.listCount + this.paginator;
      index++
    ) {
      this.getDetails(this.jobListIDs[index]);
    }
    this.paginator += this.listCount;
  }
}
