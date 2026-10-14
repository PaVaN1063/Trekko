import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { Trek, durationLabel, getTrek } from '../../../../shared/mock-data';

type TargetId = 'whatsapp' | 'telegram' | 'sms' | 'email' | 'x' | 'facebook' | 'copy' | 'more';

@Component({
  selector: 'app-share-trip',
  templateUrl: './share-trip.page.html',
  styleUrls: ['./share-trip.page.scss'],
})
export class ShareTripPage implements OnInit {
  /** Set when opened as a modal from Trip details. */
  @Input() trekId?: string;

  trek!: Trek;

  targets: { id: TargetId; label: string; icon: string; bg: string }[] = [
    { id: 'whatsapp', label: 'WhatsApp', icon: 'logo-whatsapp', bg: '#25d366' },
    { id: 'telegram', label: 'Telegram', icon: 'paper-plane', bg: '#229ed9' },
    { id: 'sms', label: 'Messages', icon: 'chatbubble-ellipses', bg: '#34c759' },
    { id: 'email', label: 'Email', icon: 'mail', bg: '#ea4335' },
    { id: 'x', label: 'X', icon: 'logo-x', bg: '#14171a' },
    { id: 'facebook', label: 'Facebook', icon: 'logo-facebook', bg: '#1877f2' },
    { id: 'copy', label: 'Copy link', icon: 'link', bg: '#3a4fd8' },
    { id: 'more', label: 'More', icon: 'ellipsis-horizontal', bg: '#6b6f8a' },
  ];

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    private nav: NavController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.trek = getTrek(this.trekId ?? this.route.snapshot.queryParamMap.get('id'));
  }

  get duration() {
    return durationLabel(this.trek);
  }

  private get link() {
    return `https://trekko.in/trek/${this.trek.id}?ref=ANANYA200`;
  }

  private get message() {
    return `Join me on ${this.trek.name} (${this.duration}) with Trekko! ${this.link}`;
  }

  async share(id: TargetId) {
    const text = encodeURIComponent(this.message);
    const url = encodeURIComponent(this.link);
    const open = (href: string) => window.open(href, '_blank');

    switch (id) {
      case 'whatsapp':
        open(`https://wa.me/?text=${text}`);
        break;
      case 'telegram':
        open(`https://t.me/share/url?url=${url}&text=${encodeURIComponent(this.trek.name)}`);
        break;
      case 'sms':
        open(`sms:?&body=${text}`);
        break;
      case 'email':
        open(`mailto:?subject=${encodeURIComponent('Trek plan: ' + this.trek.name)}&body=${text}`);
        break;
      case 'x':
        open(`https://x.com/intent/post?text=${text}`);
        break;
      case 'facebook':
        open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'more':
        if (navigator.share) {
          await navigator.share({ title: this.trek.name, text: this.message, url: this.link }).catch(() => undefined);
        } else {
          await this.copyLink();
        }
        break;
      case 'copy':
        await this.copyLink();
        break;
    }
  }

  private async copyLink() {
    try {
      await navigator.clipboard.writeText(this.link);
    } catch {
      // ignore: clipboard can be blocked in some webviews
    }
    const t = await this.toast.create({ message: 'Link copied', duration: 1600, position: 'top', cssClass: 'toast-green' });
    await t.present();
  }

  async dismissModal() {
    const top = await this.modalController.getTop();
    if (top) {
      await this.modalController.dismiss(null, 'cancel');
    } else {
      this.nav.back();
    }
  }
}
