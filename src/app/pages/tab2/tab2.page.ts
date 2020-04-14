import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HeaderConfigs } from 'src/app/interfaces/interfaces';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, AfterViewInit {
  appHeaderConfig: HeaderConfigs = {
    title: "Encabezados",
    color: 'dark',
    class: "ion-no-border"
  }

  @ViewChild("segment", { static: false }) segment: IonSegment;
  @ViewChild("infinite", { static: false }) infinite: IonInfiniteScroll;
  
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  noticias:Article[] = [];
  numeroDeNoticias:number = -1;

  constructor(
    private readonly noticiasService: NoticiasService
  ) {}

  ngOnInit(): void {
    this.resetPage();
  }
  
  ngAfterViewInit(): void {
    this.segment.value = this.categorias[0];
    this.cargarCategoria(this.categorias[0]);
  }

  cambioCategoria(e){
    this.noticias = [];
    this.resetPage();
    this.cargarCategoria(e.detail.value);
  }

  cargarCategoria(categoria, event?) {
    if(this.numeroDeNoticias != this.noticias.length)
      this.noticiasService.getTopHeadLinesCategoria(categoria)
      .subscribe(data=>{
        this.numeroDeNoticias = data.totalResults;
        this.noticias.push(... data.articles);
        if(event){
          event.target.complete();
        }
      });
    else{
      event.target.complete();
      event.target.disabled=true;
    }
  }

  loadData(event){
    this.cargarCategoria(this.segment.value, event);
  }

   
  resetPage() {
    this.noticiasService.numberPage = 0;
    if(this.infinite)
      this.infinite.disabled=false;
  };

}
