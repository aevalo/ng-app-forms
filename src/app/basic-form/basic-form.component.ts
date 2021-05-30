import { Component, OnInit } from '@angular/core';

type ModelFields = 'name';
type ModelType = Record<ModelFields, any>;

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  public submitted: boolean = false;
  public model: ModelType = {'name': undefined};

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
  }
}
