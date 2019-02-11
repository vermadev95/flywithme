import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./data.service";
import { AppRoutingModule } from './app.routing.module';
import { UsersComponent } from "./users/users.component";
import { FlightsComponent } from './flights/flights.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(updates: SwUpdate){
    updates.available.subscribe(event => {
      console.log("update available");
      const a = alert("update avaibale");
      if(a){
        updates.activateUpdate().then(() =>{
        document.location.reload()
      })
      }
    })
  }
 }
