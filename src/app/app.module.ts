import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './src/app/dbz/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
