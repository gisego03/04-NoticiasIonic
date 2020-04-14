import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { HeaderConfigs } from '../../interfaces/interfaces';
import { Article } from '../../interfaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild("infiniteScrol", {static:false}) infiniteScrol: IonInfiniteScroll;
  appHeaderConfig: HeaderConfigs = {
    title: "Fernando's News",
    color: 'dark'
  }

  noticias: Article[] = [];
  numeroDeNoticias:number = -1;
  constructor(
    private readonly noticiasService: NoticiasService
  ) {}

  ngOnInit(): void {
    this.noticiasService.numberPage=0;
    this.cargarNoticias();
  }

  loadData(event){
    this.cargarNoticias(event);
  }

  cargarNoticias(event?){
    if(this.noticias.length != this.numeroDeNoticias)
      this.noticiasService.getTopHeadLines()
        .subscribe(data =>{
          this.numeroDeNoticias = data.totalResults;
          console.log(data);
          this.noticias.push(... data.articles);
          if(event)
            event.target.complete();
        });
    else{
      event.target.complete();
      event.target.disabled=true;
    }
  }

}
