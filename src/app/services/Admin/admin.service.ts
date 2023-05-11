import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  blockUser(userId: string) {
    return this._http.put(`${environment.url}admin/user/block`, { userId });
  }

  blockBlog(blogId: string) {
    return this._http.put(`${environment.url}admin/blog/block`, { blogId });
  }

  blockQuestion(questionId: string) {
    return this._http.put(`${environment.url}admin/question/block`, { questionId });
  }
  
}
