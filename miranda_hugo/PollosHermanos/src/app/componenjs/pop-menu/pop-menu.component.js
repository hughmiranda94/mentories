"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var n,p=arguments.length,c=p<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;0<=s;s--)(n=e[s])&&(c=(p<3?n(c):3<p?n(t,o,c):n(t,o))||c);return 3<p&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),PopMenuComponent=function(){function e(e){this.db=e,this.popCards=this.db.getPopCards()}return e.prototype.ngOnInit=function(){},e=__decorate([core_1.Component({selector:"app-pop-menu",templateUrl:"./pop-menu.component.html",styleUrls:["./pop-menu.component.css"]})],e)}();exports.PopMenuComponent=PopMenuComponent;var ReversePipe=function(){function e(){}return e.prototype.transform=function(e){if(e)return e.reverse()},e=__decorate([core_1.Pipe({name:"reverse"})],e)}();exports.ReversePipe=ReversePipe;