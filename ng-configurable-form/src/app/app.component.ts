import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormItemService } from './form-item.service';
import { InputList, SelectOptionList } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  streamingTypes: InputList[] = [];
  streamingServices: SelectOptionList[] = [];
  musicGenres: InputList[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private formItemService: FormItemService) {
  }

  ngOnInit(): void {
    this.formItemService.$streamingServices.subscribe(services =>{
      this.streamingServices = services;
    });
    this.formItemService.$streamingTypes.subscribe(types => {
      this.streamingTypes = types;
    });
    this.formItemService.$musicGenres.subscribe(genres => {
      this.musicGenres = genres
    });
  }
}
