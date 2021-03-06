import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private el: ElementRef
  ) {
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor = "yellow";
   }

   @Input("appResaltado") nuevoColor: string;

   @HostListener('mouseenter') onMouseEnter(){
      this.resaltar(this.nuevoColor);
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.resaltar(null);
   }

   private resaltar(color: string = 'yellow'){
    this.el.nativeElement.style.backgroundColor = color;
   }
}
