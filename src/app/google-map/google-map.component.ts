import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement: { nativeElement: any; };

  map: any;

  constructor() {
    this.map = null;

  }

  ngAfterViewInit() {
    // this.initMap()
  }


  // initMap() {
  //   let coords = new google.maps.LatLng(25, 80);
  //   let mapOptions: google.maps.MapOptions = {
  //     center: coords,
  //     zoom: 11,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
  //   // console.log(this.mapElement);
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
  //   console.log(this.map);

  //   let marker: google.maps.Marker = new google.maps.Marker({
  //     map: this.map,
  //     position: coords
  //   });

  // }

}
