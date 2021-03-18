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


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ReactiveFormDemoComponent,
    ServerComponent,
    DirectivesDemoComponent,
    ParentComponent,
    ChildComponent,
    ComponentinteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
