import { Component } from '@angular/core';

interface FormModel {
  name?: string,
  age?: number,
  nickname?: string
};

@Component({
  selector: 'app-basic-template-driven-form',
  templateUrl: './basic-template-driven-form.component.html',
  styleUrls: ['./basic-template-driven-form.component.scss']
})
export class BasicTemplateDrivenFormComponent {
  public submitted: boolean = false;
  public model: FormModel = {};

  constructor() {
  }

  public onSubmit(): void {
    this.submitted = true;
  }
}
