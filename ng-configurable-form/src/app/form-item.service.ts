import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputList, SelectOptionList } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormItemService {
  private streamingTypes: InputList[] = [
    { id: 'mode-streaming', label: 'Streaming' },
    { id: 'mode-physical', label: 'Physical Media (vinyl, CDs, etc.' },
    { id: 'mode-file', label: 'Digital Files (MP3s, FLACC, etc.' },
    { id: 'mode-other', label: 'Other' }
  ];

  private streamingServices: SelectOptionList[] = [
    { value: 'spotify', name: 'Spotify' },
    { value: 'tidal', name: 'Tidal' },
    { value: 'appleMusic', name: 'Apple Music' },
    { value: 'youTubeMusic', name: 'You Tube Music' },
    { value: 'pandora', name: 'Pandora' },
    { value: 'deezer', name: 'Deezer' },
    { value: 'amazonMusic', name: 'Amazon Music' },
    { value: 'qobuz', name: 'Qobuz' },
    { value: 'other', name: 'Other' },
    { value: 'none', name: 'None' },
  ]

  private musicGenres: InputList[] = [
    { id: 'hip-hop', label: 'Hip Hop' },
    { id: 'rock', label: 'Rock' },
    { id: 'jazz', label: 'Jazz' },
    { id: 'electronic', label: 'Electronic' },
    { id: 'rnb', label: 'R n\' B' },
    { id: 'soul', label: 'Soul' },
    { id: 'folk', label: 'Folk' },
    { id: 'country', label: 'Country' },
    { id: 'indie', label: 'Indie' },
    { id: 'other', label: 'Other' },
  ]

  private streamingTypeSubject = new BehaviorSubject(this.streamingTypes);
  private streamingServiceSubject = new BehaviorSubject(this.streamingServices);
  private musicGenreSubject = new BehaviorSubject(this.musicGenres);

  get $streamingTypes() {
    return this.streamingTypeSubject.asObservable();
  }

  get $streamingServices() {
    return this.streamingServiceSubject.asObservable();
  }

  get $musicGenres() {
    return this.musicGenreSubject.asObservable();
  }
}
