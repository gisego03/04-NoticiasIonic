import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input("index") index:number;
  @Input("noticia") noticia:Article;
  
  constructor(
    private readonly inAppBrowser: InAppBrowser,
    private readonly actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {}

  abrirNoticia(){
    console.log(this.noticia.url);
    this.inAppBrowser.create(this.noticia.url, '_system') 
  }

  async lanzarMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Favorito',
          icon: 'heart',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, 
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }



}
