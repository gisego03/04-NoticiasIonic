import { Component, OnInit } from '@angular/core';
import { HeaderConfigs } from 'src/app/interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  appHeaderConfig: HeaderConfigs = {
    title: "Favoritos",
    color: 'dark',
    class: "ion-no-border"
  }
  slideOpts={
    allowSlidePrev:false,
    allowSlideNext:false,

  }

  constructor(
    protected readonly dataLocalService:DataLocalService
  ) {}

  async ngOnInit() {
    // await this.dataLocalService.cargarNoticias();
  }

}
