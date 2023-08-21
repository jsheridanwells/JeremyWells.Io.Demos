import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormItemService} from './form-item.service';
import {InputList, SelectOptionList} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  streamingTypes: InputList[] = [];
  musicFormats: SelectOptionList[] = [];
  musicGenres: InputList[] = [];
  musicSurveyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formItemService: FormItemService) {
    this.musicSurveyForm = this.createMusicSurveyForm();
  }

  ngOnInit(): void {
    this.formItemService.$musicFormats.subscribe(services => {
      this.musicFormats = services;
    });
    this.formItemService.$streamingTypes.subscribe(types => {
      this.streamingTypes = types;
    });
    this.formItemService.$musicGenres.subscribe(genres => {
      this.musicGenres = genres
    });
  }

  onFormSubmit(event: any): void {
    const rawVal = this.musicSurveyForm.getRawValue();
    this.musicSurveyForm = this.createMusicSurveyForm();
    console.log('raw val...;', rawVal);
  }

  onCheckboxSelect(event: any) {
    let currentValue = this.musicSurveyForm.controls['musicGenreResponse'].value;
    const updatedValue = this.updateCheckboxSelected(event, currentValue);
    this.musicSurveyForm.controls['musicGenreResponse'].setValue(updatedValue);
  }

  private createMusicSurveyForm(): FormGroup {
    return this.formBuilder.group(({
      musicFormatResponse: [''],
      streamingServiceResponse: [''],
      musicGenreResponse: [[]],
      liveMusicEventResponse: [0],
      postalCodeResponse: ['']
    }));
  }

  private updateCheckboxSelected(val: any, arr: any[]) {
    if (arr && arr.includes(val)) {
      arr = arr.filter(x => x !== val);
      return arr;
    }

    if (!arr) {
      arr = [];
    }

    arr.push(val);
    return arr;
  }
}
