import { HttpService } from "./http.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  game = {
    ninja: "",
    total_gold: 0,
    log: [],
  }
  logged_in: boolean;

  constructor(private _httpService: HttpService){
  }
  clear() {
    this._httpService.clearGame(this.game).subscribe(data => {
      if (data['message'] !== 'error') {
        this.game = data['data']
      }
    })
  }

  save() {
    this._httpService.saveGame(this.game).subscribe(data => {
      console.log(data)
      if (data['message'] === 'success') {

        this.game = data['data']
      }
    })
  }


  gameStart(){
    this._httpService.getgame(this.game).subscribe(data => {
    if (data['message'] !== 'error') {
      this.game = data['data']
      this.logged_in = true;
    }
    else {
      console.log(data['error'])
    }
    })
  } 
  
  getGold(building){
    let max, min, gold;
    if (building !== 'casino') {
      if (building === 'farm') {
      max = 5, min = 2;
      }
      else if (building === 'cave') {
        max = 10, min = 5;
      }
      else if (building === 'house') {
        max = 15, min = 7;
      }
      gold = Math.floor(Math.random() * (max - min)) + min;
    }
    else {
      gold = Math.floor(Math.random()*100) + 1;
      gold *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    }

    
    
    this.game.total_gold += gold;
    let earnLost;
    if (gold >= 0) {
      earnLost = "earn"
    }
    else {
      earnLost = "lost"
    }
    this.game.log.push(`You ${earnLost} ${gold} gold at the ${building}`)
  }


}