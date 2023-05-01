import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  @Output() onEdit = new EventEmitter<any>();
  @Output() onSubmit = new EventEmitter();
  @Input() data: any;

  publish = false;
  constructor() { }

  ngOnInit(): void {
  }

}
