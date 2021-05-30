import { Component } from '@angular/core';

type ModelFields = 'name';
type ModelType = Record<ModelFields, any>;

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {
  public submitted: boolean = false;
  public model: ModelType = {'name': undefined};

  constructor() {
  }

  public onSubmit(): void {
    this.submitted = true;
  }
}
