import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NoticiasComponent,
    NoticiaComponent
  ],
  exports:[
    HeaderComponent,
    NoticiasComponent,
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
