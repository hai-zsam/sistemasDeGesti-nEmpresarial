import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent, IonImg, IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonLabel, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPage implements OnInit {
  slides: {img:string; desc: string; color: string;}[]=[
    {
      img: 'assets/img/logo.avif',
      desc: 'En este examen utilizaremos componentes de Ionic',
      color: 'primary'
    },
    {
      img: 'assets/img/link.jpg',
      desc: 'Pero trabajaremos con la API del Zelda',
      color: 'secondary'
    },
    {
      img: 'assets/img/approved.png',
      desc: 'Para lograr el ansiado aprobado',
      color: 'success'
    }
  ]
  constructor() {}

  ngOnInit() {}
}
