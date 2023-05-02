import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>;
  imageFiles: File[] = [];
  imagesSrc: string[] = [];
  title = '';
  purpose = '';
  category = '';
  condition = '';
  author = '';
  edition = '';
  isbn = '';
  summary = '';
  price = '';
  deliveryMethod = '';
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

  submit(e: any) {
    e.preventDefault();
    if (this.imagesSrc.length < 2) {
      alert("You must upload at least two photos.!");
      return;
    }

    this.onSubmit.emit({
      imageFiles: this.imageFiles,
      title: this.title,
      purpose: this.purpose,
      category: this.category,
      condition: this.condition,
      author: this.author,
      edition: this.edition,
      isbn: this.isbn,
      summary: this.summary,
      price: this.price,
      deliveryMethod: this.deliveryMethod,
      imagesSrc: this.imagesSrc
    });
  }

}
