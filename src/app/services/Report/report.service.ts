import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  reportQuestion(questionId: string, reason: string) {
    return this._http.post(`${environment.url}report/report/question`, { questionId, reason })
  }

  reportBlog(blogId: string, reason: string) {
    return this._http.post(`${environment.url}report/report/blog`, { blogId, reason })
  }

  reportUser(userId: string | null, reason: string) {
    return this._http.post(`${environment.url}report/report/user`, { userId, reason })
  }

  getUserReports() {
    return this._http.get(`${environment.url}report/get/user`)
  }

  changeValidStatus(reportId: string) {
    console.log(reportId)
    return this._http.put(`${environment.url}admin/report/change/valid`, { reportId })
  }

  getUserDetailReport(userId: string) {
    return this._http.get(`${environment.url}report/get/user/${userId}`)
  }

  getQuestionReports() {
    return this._http.get(`${environment.url}report/get/question`)
  }

  getQuestionDetailReport(questionId: string) {
    return this._http.get(`${environment.url}report/get/question/${questionId}`)
  }

  changeValidStatusQuestion(reportId: string) {
    return this._http.put(`${environment.url}admin/report/change/valid/question`, { reportId })
  }

  getBlogReports() {
    return this._http.get(`${environment.url}report/get/blog`)
  }

  changeValidStatusBlog(reportId: string) {
    return this._http.put(`${environment.url}admin/report/change/valid/blog`, { reportId })
  }

  getBlogDetailReport(blogId: string) {
    return this._http.get(`${environment.url}report/get/blog/${blogId}`)
  }
  
}
