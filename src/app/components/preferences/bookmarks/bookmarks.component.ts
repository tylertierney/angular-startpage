import { Component, OnInit, Input } from '@angular/core';
import {
  PreferencesInterface,
  UserpreferencesService,
} from 'src/app/services/userpreferences.service';
import { Subscription } from 'rxjs';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { BookmarkInterface } from 'src/app/services/userpreferences.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  providers: [UserpreferencesService],
})
export class BookmarksComponent implements OnInit {
  subscription: Subscription;
  isEditing: boolean = false;
  faEdit = faEdit;
  @Input() preferences: PreferencesInterface | null;

  constructor(private userPrefService: UserpreferencesService) {}

  ngOnInit(): void {}

  handleListItemClick(index: number) {
    const bookmarks = this.preferences?.bookmarks;
    if (bookmarks == null) {
      return null;
    }
    bookmarks[index].active = !bookmarks[index].active;
    this.handleBookmarksChange(bookmarks);

    return null;
  }

  handleBookmarkUrlEdit(index: number, e: Event) {
    const bookmarks = this.preferences?.bookmarks;
    if (bookmarks == null) {
      return null;
    }

    bookmarks[index].url = (e.target as HTMLInputElement).value;
    this.handleBookmarksChange(bookmarks);
    return null;
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  turnOnEditing(index: number, e: Event) {
    const bookmarks = this.preferences?.bookmarks;
    if (bookmarks == null) {
      return null;
    }
    bookmarks[index].isEditing = !bookmarks[index].isEditing;
    e.stopPropagation();
    return null;
  }

  handleBookmarksChange(bookmarks: BookmarkInterface[]): void {
    this.userPrefService.updateCurrentPrefs('bookmarks', bookmarks);
  }
}
