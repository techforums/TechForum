import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  // private bookmarks$ = new BehaviorSubject<Bookmark[]>([]);
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get<any>('http://localhost:4444/users/question');
  }

  questionPagination(page: number, limit: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<any>('http://localhost:4444/users/quepagination', {
      params,
    });
  }

  postQuestion(data: any) {
    return this.http.post<any>('http://localhost:4444/users/question', data);
  }

  postAnswer(data: any) {
    return this.http.post<any>('http://localhost:4444/users/answer', data);
  }

  getQuestionById(id: any) {
    return this.http.get<any>('http://localhost:4444/users/question/' + id);
  }

  getAnswerById(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/users/answer/' + id);
  }

  getTags(): Observable<any> {
    return this.http.get<any>('http://localhost:4444/users/getalltags');
  }

  addRemoveBookmark(data: any) {
    return this.http.post<any>('http://localhost:4444/users/bookmark', data);
  }

  getBookmarkByUserId(userId: any) {
    return this.http.get<any>('http://localhost:4444/users/bookmark/' + userId);
  }

  upvotesAnswer(id: any, data: any) {
    return this.http.post<any>(
      `http://localhost:4444/users/upvote/${id}`,
      data
    );
  }

  downvotesAnswer(id: any, data: any) {
    return this.http.post<any>(
      `http://localhost:4444/users/downvote/${id}`,
      data
    );
  }

  searchQuestion(query: any) {
    return this.http.get<any>(
      'http://localhost:4444/users/search?question=' + query
    );
  }

  getBlogTitle(){
    return this.http.get<any>('http://localhost:4444/users/blogtitle');
  }
}
