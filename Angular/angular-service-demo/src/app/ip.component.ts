import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip',
  template: `<h3>ip component</h3>`
})
export class IpComponent {
  constructor(private http: HttpClient) {
    this.http.get(' http://ip.jsontest.com/?alloworigin=false')
      .toPromise()
      .then(res => JSON)
      .then(resJson => console.log(resJson))
      .catch(err => console.log(err));
  }
}
