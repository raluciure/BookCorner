import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  imageFiles: File[] = [];
  imagesSrc: string[] = [];
  title = '';
  constructor() { }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    const files = e.target.files;

    this.imageFiles.push(...files);
    this.imageFiles = this.imageFiles.slice(0, 3);
    this.refreshImages();
  }

  removeImage(idx: number) {
    this.imageFiles = this.imageFiles.filter((item, index) => {
      return idx !== index;
    });
    this.refreshImages();
  }

  changeFileToSrc(file: File):Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        resolve(reader.result as string);
      });
      reader.readAsDataURL(file);
    })
  }

  async refreshImages() {
    const images =  this.imageFiles.map(this.changeFileToSrc);
    this.imagesSrc = await Promise.all(images);
  }


}
