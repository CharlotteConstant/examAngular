import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { IncidentComponent } from './incident/incident.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes= [
{path: 'home', component:IncidentListComponent },
{path: 'incident/add', component:IncidentAddComponent},
{path: 'incident', component:IncidentListComponent},
{path: 'incident/:id', component:IncidentDetailComponent},
 {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    IncidentDetailComponent,
    IncidentAddComponent,
    IncidentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [NgbProgressbarConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
