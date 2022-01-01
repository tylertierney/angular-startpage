import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { PreferencesModalService } from './services/preferences-modal.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ToolbarComponent,
    PreferencesComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [PreferencesModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
