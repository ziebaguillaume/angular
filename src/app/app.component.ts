import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  SelectedItem: any = { 
  title: "Corobabavirus",
  img: "../assets/corobaba.jpg",
  description: "Baba virus",
};

   liste : any[]= 
  [
 {
   title: "Corobabavirus",
   img: "../assets/corobaba.jpg",
   description: "Baba virus",
   id:0,
 },
 {
   title: "Coronessvirus",
   img: "../assets/baba.jpg",
   description: "Couille virus",
   id:1,
 },
 {
   title: "Corinavirus",
   img: "../assets/daronnehenry.jpg",
   description: "La Daronne de Henry",
   id:2,
 }
]

UpdateMain(id){

  this.SelectedItem=this.liste[id];
}

}
