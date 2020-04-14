import { Component, OnInit, Input } from '@angular/core';
import { HeaderConfigs } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input("configs") config: HeaderConfigs;


  constructor() { }
  

  ngOnInit() {}


}
