import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Output() onSeeList = new EventEmitter();
  constructor(
    public location: Location
  ) { }

  ngOnInit(): void {
  }

}
