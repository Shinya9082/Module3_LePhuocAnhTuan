import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'changeIdPipe'})
export class ChangeIdPipe implements PipeTransform {
  transform(value: number, type: string): string {
    const newStr = `${type} ${value}`;
    if (value < 10) {
      return `${type}-000${value}`;
    } else if (value < 100) {
      return `${type}-00${value}`;
    } else if (value < 1000) {
      return `${type}-0${value}`;
    } else {
      return `${type}-${value}`;
    }
  }
}
