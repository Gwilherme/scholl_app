import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLite } from '@ionic-native/sqlite';
//import { DatabaseService } from './database.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';

@NgModule({
  declarations: [ AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br'},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    /*
    DatabaseService,
    ProductService,
    CategoryService
    */
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {}
