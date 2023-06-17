import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MathComponent } from './components/math/math.component';
import { FormComponent } from './components/form/form.component';
import { HttpComponent } from './components/http/http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CalculatorComponent,
    MathComponent,
    FormComponent,
    HttpComponent
  ],
  imports: [
    FormsModule,BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
