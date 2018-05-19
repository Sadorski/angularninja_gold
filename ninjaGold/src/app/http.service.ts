import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }
  getgame(gameObj) {
      return this._http.post(`/ninja_gold/${gameObj.ninja}`, gameObj)
  }
  saveGame(gameObj) {
      return this._http.put(`/ninja_gold/${gameObj._id}`, gameObj)
  }
  clearGame(gameObj) {
      return this._http.put(`/ninja_gold/${gameObj._id}/clear`, gameObj)
  }
}