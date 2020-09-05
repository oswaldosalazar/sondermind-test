import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniqueListComponent } from './uniquelist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UniqueListComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [UniqueListComponent]
})
export class UniqueListModule {}
