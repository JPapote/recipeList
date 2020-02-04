import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class Dropdown {    
    @HostBinding('class.open') dropdownVF = false;


    constructor(private elRef: ElementRef){}

    
    @HostListener('document:click', ['$event']) deleteIngredient(event: Event) {
        this.dropdownVF = this.elRef.nativeElement.contains(event.target) ? !this.dropdownVF : false;
      }
   
    // ngOnInit(){}

    // @HostListener('click') deleteIngredient (detele: Event){
    //     this.dropdownVF = !this.dropdownVF;
    // }
}