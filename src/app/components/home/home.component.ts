import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/Question/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions!: [
    {
      _id: string,
      title: string,
      answerCount: number,
      views: number,
      date: Date,
      user: {
        username: string,
        profile_pic: string,
        likes: [],
        _id: string
      },
      answers: []
      tags: [
        {
          name: string,
          _id: string
        }
      ]
    }
  ]
  pageIndex = 0
  pageSize = 5
  totalCount = 0
  filterValue!: string
  sortValue!: string

  constructor(
    private _questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.loadQuestions()
  }

  loadQuestions(): void {
    const limit = this.pageSize;
    this._questionService.getAllQuestions(this.pageIndex, limit, this.filterValue, this.sortValue).subscribe((data: any) => {
      console.log(data)
      if (data.questions) {
        this.questions = data.questions;
        this.totalCount = data.totalPosts;
      }
      else
        console.log("something went wrong in dashboard");
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    if (this.filterValue)
      console.log(this.filterValue, "asda")
    this.loadQuestions();
  }

  receiveFilterValue(filterValue: any) {
    this.filterValue = filterValue
    this.loadQuestions()
  }

  receiveSortValue(sortValue: any) {
    this.sortValue = sortValue
    this.loadQuestions()
  }
}
