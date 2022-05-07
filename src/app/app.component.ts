import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Hadi_h82";
  // isEnabled: boolean = true;

  public onInputChanged(e: Event) {
    // console.log(e);

    // this.name = (e.target as HTMLInputElement).value;
    this.name = (<HTMLInputElement>e.target).value;

  }
}


// HTMLInputElement