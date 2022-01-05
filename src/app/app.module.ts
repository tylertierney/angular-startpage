import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { PreferencesModalService } from './services/preferences-modal.service';
import { GreetingComponent } from './components/greeting/greeting.component';
import { BookmarksComponent } from './components/preferences/bookmarks/bookmarks.component';
import { BookmarksgridComponent } from './components/bookmarksgrid/bookmarksgrid.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SvgcomponentComponent } from './components/svgcomponent/svgcomponent.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ToolbarComponent,
    PreferencesComponent,
    GreetingComponent,
    BookmarksComponent,
    BookmarksgridComponent,
    SearchbarComponent,
    SvgcomponentComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [PreferencesModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
