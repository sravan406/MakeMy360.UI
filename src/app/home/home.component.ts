import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.onLoadScripts();


  }

  // onLoadScripts()
  // {
  //   $(document).ready(function(){
  //     // Add smooth scrolling to all links in navbar + footer link
  //     $(".navbar10 a, footer a[href='#myHomePage']").on('click', function(event) {
  //       // Make sure this.hash has a value before overriding default behavior
  //       if (this.hash !== "") {
        
  //         // Prevent default anchor click behavior
  //         event.preventDefault();
    
  //         // Store hash
  //         var hash = this.hash;
    
  //         // Using jQuery's animate() method to add smooth page scroll
  //         // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  //         $('html, body').animate({
  //           scrollTop: $(hash).offset().top
  //         }, 900, function(){
       
  //           // Add hash (#) to URL when done scrolling (default click behavior)
  //           window.location.hash = hash;
  //         });
  //       } // End if
  //     });
      
  //     $(window).scroll(function() {
  //       $(".slideanim").each(function(){
  //         var pos = $(this).offset().top;
    
  //         var winTop = $(window).scrollTop();
  //           if (pos < winTop + 600) {
  //             $(this).addClass("slide");
  //           }
  //       });
  //     });
  //   })
  //   //text writing javascript code
  //   var TxtType = function(el, toRotate, period) {
  //           this.toRotate = toRotate;
  //           this.el = el;
  //           this.loopNum = 0;
  //           this.period = parseInt(period, 10) || 1000;
  //           this.txt = '';
  //           this.tick();
  //           this.isDeleting = false;
  //       };
    
  //       TxtType.prototype.tick = function() {
  //           var i = this.loopNum % this.toRotate.length;
  //           var fullTxt = this.toRotate[i];
    
  //           if (this.isDeleting) {
  //           this.txt = fullTxt.substring(0, this.txt.length - 1);
  //           } else {
  //           this.txt = fullTxt.substring(0, this.txt.length + 1);
  //           }
    
  //           this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
  //           var that = this;
  //           var delta = 200 - Math.random() * 100;
    
  //           if (this.isDeleting) { delta /= 2; }
    
  //           if (!this.isDeleting && this.txt === fullTxt) {
  //           delta = this.period;
  //           this.isDeleting = true;
  //           } else if (this.isDeleting && this.txt === '') {
  //           this.isDeleting = false;
  //           this.loopNum++;
  //           delta = 500;
  //           }
    
  //           setTimeout(function() {
  //           that.tick();
  //           }, delta);
  //       };
    
  //       window.onload = function() {
  //           var elements = document.getElementsByClassName('typewrite');
  //           for (var i=0; i<elements.length; i++) {
  //               var toRotate = elements[i].getAttribute('data-type');
  //               var period = elements[i].getAttribute('data-period');
  //               if (toRotate) {
  //                 new TxtType(elements[i], JSON.parse(toRotate), period);
  //               }
  //           }
  //           // INJECT CSS
  //           var css = document.createElement("style");
  //           css.type = "text/css";
  //           css.innerHTML = ".typewrite > .wrap { border-right: 0.06em solid #444444;padding-left:0.1%;padding-right:0.5%;animation: typewrite 4s steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal;@keyframes typewriter{from{width: 0;}to{width: 24em;}}}@keyframes blinkTextCursor{ from{border-right-color: rgba(68,68,68,.75);}to{border-right-color: transparent;}}";
  //         document.body.appendChild(css);
  //       };
  // }



}
