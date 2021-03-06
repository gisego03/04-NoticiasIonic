import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing/index';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';



@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input("index") index:number;
  @Input("noticia") noticia:Article;
  @Input("enFavoritos") enFavoritos:boolean = false;
  
  constructor(
    private readonly inAppBrowser: InAppBrowser,
    private readonly actionSheetCtrl: ActionSheetController,
    private readonly socialSharing: SocialSharing,
    private readonly dataLocalService: DataLocalService,
  ) { }

  ngOnInit() { }

  abrirNoticia(){
    console.log(this.noticia.url);
    this.inAppBrowser.create(this.noticia.url, '_system') 
  }

  async lanzarMenu(){
    let buttons= this.getButtons();
    const actionSheet = await this.actionSheetCtrl.create({
      buttons
    });
    await actionSheet.present();
  }

  getButtons(): any[]{

    let button = {
      text: 'Favorito',
      icon: 'heart',
      cssClass: 'action-dark',
      handler: () => {
        console.log('Favorite clicked');
        this.dataLocalService.guardarNoticia(this.noticia);
      }
    };
    if(this.enFavoritos)
      button = {
        text: 'Eliminar de favoritos',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar de faborito');
          this.dataLocalService.eliminarNoticia(this.noticia);

        }
      }; 

    let buttons = [{
      text: 'Compartir',
      icon: 'share',
      cssClass: 'action-dark',
      handler: () => {
        console.log('Share clicked');
        this.socialSharing.share(
          this.noticia.title, 
          this.noticia.source.name,
          '',
          this.noticia.url);
      }
    },
    button,
    {
      text: 'Cancelar',
      icon: 'close',
      role: 'cancel',
      cssClass: 'action-dark',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]

    return buttons;
  }
}
