import { AgmCoreModule } from '@agm/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  lat: number = 12.990833;
  lng: number = 80.246944;


  
  ngOnInit() {
  }
}