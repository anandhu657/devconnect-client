import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient) { }

  postBlog(blog: any, tags: string[]) {
    return this._http.post(environment.url + 'blogs/add', { blog, tags })
  }

  getAllBlogs(skip: number, limit: number) {
    const queryParams = `?skip=${skip}&limit=${limit}`;
    return this._http.get(environment.url + 'blogs' + queryParams)
  }

  getBlog(id: string) {
    return this._http.get(environment.url + 'blogs/blog/' + id)
  }

  getLatestBlog() {
    return this._http.get(environment.url + 'blogs/latest');
  }

  getTagRelatedBlog(tags: [
    {
      name: string,
      _id: string
    }]) {
    const queryParams = new HttpParams().set('tags', tags.map(tag => tag._id).join(','));
    return this._http.get(environment.url + 'blogs/tags', { params: queryParams });
  }

  getNoAnswers() {
    return this._http.get(environment.url + 'blogs/noanswers');
  }

  likeBlog(blogId: string) {
    return this._http.get(environment.url + 'blogs/like/' + blogId);
  }

  saveBlog(blogId: string) {
    return this._http.get(environment.url + 'blogs/save/' + blogId);
  }

  getUserBlogs(userId: string) {
    return this._http.get(environment.url + 'blogs/userBlogs/' + userId);
  }
}
