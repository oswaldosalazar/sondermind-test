import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'grouper',
  templateUrl: './grouper.component.html',
  styleUrls: ['./grouper.component.css']
})
export class GrouperComponent implements OnInit {
  @Input() data: string[];
  sizeInput: number;
  size: number;
  result: any = {};
  groupsCounter: number = 0;
  showResult: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.groupsCounter = 0;
    this.result = {};
    this.showResult = false;

    this.size = this.sizeInput;
    if (this.size != 0) {
      let countedElems = this.data.reduce(function (sameElems, elem) {
        if (elem in sameElems) {
          sameElems[elem]++;
        } else {
          sameElems[elem] = 1;
        }
        return sameElems;
      }, {});

      for (let [key, value] of Object.entries(countedElems)) {
        this.result[key] = parseInt(value / this.size);
        this.groupsCounter += parseInt(value / this.size);
      }
      this.showResult = !isNaN(this.groupsCounter);
      this.sizeInput = '';
    }
  }
}
