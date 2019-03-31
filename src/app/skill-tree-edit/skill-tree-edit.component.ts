import { Component, OnInit, HostListener } from '@angular/core';
import SkillBar from './skill-tree-edit';
import Object from '../canvas/object';

@Component({
  selector: 'app-skill-bars',
  templateUrl: './skill-tree-edit.component.html',
  styleUrls: ['./skill-tree-edit.component.css']
})
export class SkillBarsComponent implements OnInit {


  objs: SkillBar[] = [];
  selectedObj: SkillBar;
  setWidth(event): void {
      this.selectedObj.width = this.selectedObj.familiar;
  }
  getRandomColor(): string {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  @HostListener('window:beforeunload')
  doSometing(): void {
    this.objs.forEach(x => x.width = 0 );
   sessionStorage.setItem('data', JSON.stringify(this.objs));
  }
  addSkill(): void {
    this.objs.push({
      id: 20,
      name: 'Skill',
      color: this.getRandomColor(),
      familiar: 20,
      width: 20,
    });
  }
  removeObject(): void {
    this.objs = this.objs.filter(item => item !== this.selectedObj );
    this.selectedObj = null;
  }
  onLoad( obj: SkillBar): void {
    setTimeout(function() {
      obj.width = obj.familiar;
    }, 0);

  }
  getColor(obj: SkillBar): string {
    return obj.color;
  }
  getWidth(obj: SkillBar): string {
    return obj.width + '%';
  }
  onSelect(obj: SkillBar): void {
    this.selectedObj = obj;
  }
  constructor() {

  }

  ngOnInit() {
    this.objs = JSON.parse(sessionStorage.getItem('data'))||[];
  }

}
