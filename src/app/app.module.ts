import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { LastNextVisitComponent } from './dashboard-body/last-next-visit/last-next-visit.component';
import { PatientBalComponent } from './dashboard-body/patient-bal/patient-bal.component';
import { InsuranceBalComponent } from './dashboard-body/insurance-bal/insurance-bal.component';
import { MessagesComponent } from './dashboard-body/messages/messages.component';
import { LastVisitComponent } from './dashboard-body/last-visit/last-visit.component';
import { NotesComponent } from './dashboard-body/notes/notes.component';
import { ContactsComponent } from './dashboard-body/contacts/contacts.component';
import { DocumentsComponent } from './dashboard-body/documents/documents.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    PatientInfoComponent,
    DashboardBodyComponent,
    LastNextVisitComponent,
    PatientBalComponent,
    InsuranceBalComponent,
    MessagesComponent,
    LastVisitComponent,
    NotesComponent,
    ContactsComponent,
    DocumentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
