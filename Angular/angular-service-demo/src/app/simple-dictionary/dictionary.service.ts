import {Injectable} from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'}
  ];
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    return (w) ? w.meaning : 'Not found';
  }
}

export interface IWord {
  key: string;
  meaning: string;
}
