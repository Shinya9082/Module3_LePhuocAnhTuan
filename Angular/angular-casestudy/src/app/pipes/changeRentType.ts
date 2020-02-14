import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'changeRentTypePipe'})
export class ChangeRentTypePipe implements PipeTransform {
  transform(value): string {
    switch (value) {
      case 'year': return 'theo năm';
      case 'month': return 'theo tháng';
      case 'week': return 'theo tuần';
      case 'day': return 'theo ngày';
      case 'hour': return 'giờ';
      default:
        return 'Không xác định';
    }
  }
}
