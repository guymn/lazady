import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent },
      { path: 'store', component: StoreComponent },
      { path: 'store', component: StoreComponent },
      { path: 'store', component: StoreComponent },
    ]),
  ],
})
export class AppModule {}
