import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iquestion } from 'src/app/models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private _http: HttpClient) { }

  addQuestion(question: Iquestion, tags: string[]) {
    return this._http.post(environment.url + 'questions/add', { question, tags })
  }

  getAllQuestions(skip: number, limit: number) {
    const queryParams = `?skip=${skip}&limit=${limit}`
    return this._http.get(environment.url + 'questions/' + queryParams)
  }

  getQuestions(question_id: string) {
    return this._http.get(environment.url + 'questions/question/' + question_id)
  }

  getQuestionsByUser(userId: string) {
    return this._http.get(environment.url + 'questions/profile/' + userId);
  }

  getTagRelatedQuestion(tags: [
    {
      name: string,
      _id: string
    }
  ]) {
    const queryParams = new HttpParams().set('tags', tags.map(tag => tag._id).join(','));
    return this._http.get(environment.url + 'questions/tags', { params: queryParams });
  }

  addAnswer(question_id: string, answer: string) {
    return this._http.post(environment.url + 'answers', { question_id, answer });
  }

  likeQuestion(question_id: string) {
    return this._http.post(environment.url + 'questions/like', { question_id });
  }

  dislikeQuestion(question_id: string) {
    return this._http.post(environment.url + 'questions/dislike', { question_id });
  }

  getNoAnswers() {
    return this._http.get(environment.url + 'questions/noanswers');
  }

  addQuestionComment(question_id: string, comment: string) {
    return this._http.post(environment.url + 'questions/comment', { question_id, comment });
  }

  addAnswerComment(questionId: string, answerId: string, answerComment: string) {
    return this._http.post(environment.url + 'answers/comment', { questionId, answerId, answerComment });
  }
}
