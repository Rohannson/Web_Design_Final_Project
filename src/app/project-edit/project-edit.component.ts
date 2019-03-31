import { Component, OnInit } from '@angular/core';
import { MOCK } from '../mock-project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  projects = MOCK;

  constructor() { }

  ngOnInit() {

  }



}
