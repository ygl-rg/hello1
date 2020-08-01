import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #form_ref="ngForm"
            (ngSubmit)="onSubmit(form_ref.value)">
        <input type="text"
               required
               name="name"
               [(ngModel)] = "name"
               #name_ref = "ngModel"
        />
        {{name_ref.valid}}
        <input type="password"
               required
               name="pwd"
               [(ngModel)]="pwd"
               #pwd_ref = "ngModel"
        />
        <div *ngIf="pwd_ref.errors?.required">密码必须</div>
        <button type="submit">登入</button>
      </form>
    </div>
  `,
  styles: ['input.ng-valid {border: 3px solid green;}']
})
export class LoginComponent implements OnInit {
  name: string;
  pwd: string;

  constructor(@Inject('auth1') private service) { }

  ngOnInit() {
  }

  onSubmit(form_val) {
    console.log(form_val);
  }
}
