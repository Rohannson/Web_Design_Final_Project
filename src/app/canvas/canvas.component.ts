import { Component, OnInit } from '@angular/core';
import Object from './object';
import {Objects} from './mock-objects';
import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  objs = Objects;

  selectedObj: Object;

  dragStartX = 0;
  dragStartY = 0;
  rezizeStartX = 0;
  rezizeStartY = 0;
  removeObject(): void {
    this.objs = this.objs.filter(item => item !== this.selectedObj );
    this.selectedObj = null;
  }
  onResizeStart(obj, event: ResizeEvent): void {
    this.rezizeStartX = event.rectangle.left;
    this.rezizeStartY = event.rectangle.top;

  }
  onResizeEnd(obj, event: ResizeEvent): void {
    obj.x = obj.x + event.rectangle.left - this.rezizeStartX;
    obj.y = obj.y + event.rectangle.top - this.rezizeStartY;
    obj.width = event.rectangle.width ;
    obj.height = event.rectangle.height;
    console.log('Element was resized', event);

  }
  getWidth(obj: Object): string {
    return obj.width  + 'px';
  }
  getHeight(obj: Object): string {
    return obj.height  + 'px';
  }
  getLeft(obj: Object): string {
    return obj.x  + 'px';
  }
  getTop(obj: Object): string {
    return obj.y  + 'px';
  }
  addText(): void {
    this.objs.push({
      id: 20,
      type: 0,
      content: 'Text',
      x: 0,
      y: 0,
      height: 20,
      width: 80
    });
  }
  addImage(): void {
    this.objs.push({
      id: 20,
      type: 1,
      content: './images/default.png',
      x: 0,
      y: 0,
      height: 200,
      width: 240
    });
  }
  onSelect(obj: Object): void {
    this.selectedObj = obj;
  }
  onDragEnd(obj: Object, event): void {
    obj.x += event.x - this.dragStartX;
    obj.y += event.y - this.dragStartY;

  }
  onDragStart(obj: Object, event): void {
    this.dragStartX = event.x;
    this.dragStartY = event.y;

  }

  onDragOver(): void {
    console.log(222);
  }
  constructor() { }

  ngOnInit() {
  }

}
