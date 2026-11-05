import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonList, IonTitle, IonToolbar } from '@ionic/angular';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonAvatar,
    IonButton,
    IonIcon,
    IonList,
    IonicModule,
  ],
})
export class MaterialesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
