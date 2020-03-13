import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  isHovering: boolean;

  files: File[] = [];
  imgUrlList = [];
  data = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  pushUrlToList(url: string) {
    if (url) {
      this.imgUrlList.push(url);
      console.log(url);
    }
  }
  getUrlList() {
    this.data = this.imgUrlList;
  }
}

