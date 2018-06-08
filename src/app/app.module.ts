import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpUrlEncodingCodec} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatDividerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatNativeDateModule, MatDividerModule, MatListModule,
    ReactiveFormsModule, MatAutocompleteModule, MatExpansionModule,
    MatButtonModule, MatCheckboxModule, MatSliderModule, MatCardModule,
    MatSlideToggleModule, MatToolbarModule, MatTooltipModule,
    MatIconModule, MatInputModule, MatSortModule, MatTableModule, MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
