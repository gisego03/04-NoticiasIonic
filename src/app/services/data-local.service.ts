import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  

  noticias:Article[] = [];

  constructor(
    private readonly storage: Storage,
    private readonly toastCtrl: ToastController,
  ) {
    this.cargarNoticias();
   }

  guardarNoticia(noticia: Article){
    const existe = this.noticias.find(x=> x.title===noticia.title)
    if(existe)
      return;

    this.noticias.unshift(noticia);
    this.storage.set("favoritos", this.noticias);
    this.showToast('Agregada a favoritos');
  }

  eliminarNoticia(noticia: Article) {
    // const index = this.noticias.findIndex(x=> x.title===noticia.title)
    // if(index == -1)
    //   return;

    // this.noticias.splice(index, 1);
    this.noticias = this.noticias.filter(x=> x.title !== noticia.title);
    this.storage.set("favoritos", this.noticias);
    this.showToast('Borrada de favoritos');

  }

  async cargarNoticias(){
    const favoritos = await this.storage.get("favoritos");
    if(favoritos)
      this.noticias = favoritos;
  }

  async showToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
