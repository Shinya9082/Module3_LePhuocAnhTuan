import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'changePhoneNumber'
})
export class ChangePhoneNumberPipe implements PipeTransform {
  transform(value) {
    if ( value.length === 10 ) {
      return value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6);
    } else {
      return value.substring(0, 7) + '-' + value.substring(7, 10) + '-' + value.substring(10);
    }
  }
}
