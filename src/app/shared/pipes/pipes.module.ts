import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatePercentPipe } from './rate-percent.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RatePercentPipe,

  ],
  exports: [
    RatePercentPipe,
  ],
})
export class PipesModule {}
