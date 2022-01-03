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
import { TabsComponent } from './components/preferences/tabs/tabs.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SvgcomponentComponent } from './components/svgcomponent/svgcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ToolbarComponent,
    PreferencesComponent,
    GreetingComponent,
    BookmarksComponent,
    BookmarksgridComponent,
    TabsComponent,
    SearchbarComponent,
    SvgcomponentComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [PreferencesModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
