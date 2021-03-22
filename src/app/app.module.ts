import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { ServerComponent } from  './server/server.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { AngularFormAss1Component } from './angular-form-ass1/angular-form-ass1.component';
import { BindingDemoSecondComponent } from './binding-demo-second/binding-demo-second.component';
import { ValidateEqualModule } from 'ng-validate-equal';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ReactiveFormDemoComponent,
    ServerComponent,
    DirectivesDemoComponent,
    ParentComponent,
    ChildComponent,
    ComponentinteractionComponent,
    BindingDemoComponent,
    AngularFormAss1Component,
    BindingDemoSecondComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ValidateEqualModule,
  ],
  providers: [],
  bootstrap: [ ReactiveFormDemoComponent],
  //bootstrap: [BindingDemoSecondComponent]

})
export class AppModule { }
