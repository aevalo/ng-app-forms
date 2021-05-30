import { Directive, Input } from '@angular/core'
import { NG_VALIDATORS, Validator, AbstractControl, Validators, ValidationErrors } from '@angular/forms'

@Directive({
  selector: '[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {
  @Input() min?: number | string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (isFinite(this.min as number)) {
      return Validators.min(parseInt(String(this.min)))(control);
    }
    return {'min': true};
  }
}
