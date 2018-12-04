import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResponsiveWebDevelopment';




  expandDiv1(){
    var d1 = document.getElementById("div1");
    var d2 = document.getElementById("div2");
    var d3 = document.getElementById("div3");
    // d1.style.width = "90%";
    // d2.style.width = "5%";
    // d3.style.width = "5%";
    d3.style.display = "none";
    d2.style.display = "none";
  }

  expandDiv2(){
    var d1 = document.getElementById("div1");
    var d2 = document.getElementById("div2");
    var d3 = document.getElementById("div3");
    var bl =document.getElementById("openLeft");
    var br =document.getElementById("openRight");
    // d1.style.width = "5%";
    // d2.style.width = "90%";
    // d3.style.width = "5%";
    d3.style.display = "none";
    d1.style.display = "none";
    bl.style.display = "block";
    br.style.display = "block";
  }


  expandDiv3(){
    var d1 = document.getElementById("div1");
    var d2 = document.getElementById("div2");
    var d3 = document.getElementById("div3");
    // d1.style.width = "5%";
    // d2.style.width = "5%";
    // d3.style.width = "90%";
    d1.style.display = "none";
    d2.style.display = "none";
  }


}
