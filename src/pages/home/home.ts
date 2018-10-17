import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private audioNames = ['audio1', 'audio2', 'audio3'];

  constructor(public navCtrl: NavController) {
  }

  onButtonClick(index: number) {
    this.playTrack(this.audioNames[index]);
  }

  private playTrack(trackName: string) {
    // TODO ionic play
    console.log('playing track', trackName);
  }
}
