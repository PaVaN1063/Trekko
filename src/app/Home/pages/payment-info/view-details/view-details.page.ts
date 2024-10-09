import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal | any;

  constructor(private modalController: ModalController,) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }
}
