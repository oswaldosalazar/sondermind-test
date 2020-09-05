import { Component, NgModule, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblyLineComponent {
  @Input() stages: string[];
  items = {};
  item: string = '';

  addItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      item: ['']
    });
    for (let i = 0; i < this.stages.length; i++) {
      this.items[this.stages[i]] = [];
    }
  }

  onSubmit() {
    const newItem = this.addItemForm.value.item;
    this.addItemForm.reset();
    this.items[this.stages[0]].push(newItem);
  }

  upStage(e) {
    const buttonStage = e.target.name;
    const buttonItem = e.target.id;
    const stageContent = this.items[buttonStage];
    const stageIndex = this.stages.indexOf(buttonStage);
    this.items[buttonStage] = stageContent.filter(item => item !== buttonItem);
    if (stageIndex + 1 < this.stages.length) {
      this.items[this.stages[stageIndex + 1]].push(buttonItem);
    }

    console.log(this.items);
  }

  downStage(e) {
    const buttonStage = e.target.name;
    const buttonItem = e.target.id;
    const stageContent = this.items[buttonStage];
    const stageIndex = this.stages.indexOf(buttonStage);
    this.items[buttonStage] = stageContent.filter(item => item !== buttonItem);
    if (stageIndex > 0) {
      this.items[this.stages[stageIndex - 1]].push(buttonItem);
    }

    console.log(this.items);
  }
}
