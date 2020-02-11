import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {AuthService} from '../auth.service';
import {IWord} from '../dictionary-detail/IWord';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];
  constructor(
    private dictionaryService: DictionaryService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.listWord);
    this.listWord = this.dictionaryService.getAll();
  }
}
