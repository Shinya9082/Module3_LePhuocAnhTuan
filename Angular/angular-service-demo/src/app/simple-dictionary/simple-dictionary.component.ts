import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from './dictionary.service';

@Component({
  selector: 'app-simple-dictionary',
  templateUrl: './simple-dictionary.component.html',
  styleUrls: ['./simple-dictionary.component.css']
})
export class SimpleDictionaryComponent implements OnInit {
  word: IWord;
  constructor(private dictionaryService: DictionaryService) {
  }
  search(word: string) {
    const temp = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: temp
    };
  }
  ngOnInit() {
  }

}
