import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../dictionary.service';
import {Subscription} from 'rxjs';
import {IWord} from './IWord';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key1 = paramMap.get('key');
      const temp = this.dictionaryService.search(key1);
      this.word = {
        key: key1,
        meaning: temp
      };
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
