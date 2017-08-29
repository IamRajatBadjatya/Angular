import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  interpolationText: string = 'This is a placeholder text for String Interpolation';
  propertyBindingText: string = 'This is a placeholder text for Property Binding';
  twoWayDataBindingText: string = 'This is a placeholder text for Two Way Data Binding';

  dataForChildComponent: string[] = [
    'First Element',
    'Second Element'
  ];
  
  constructor() { }

  ngOnInit() {
  }

  clickEventHandler(event) {
    alert('Button Clicked');
  }

}
