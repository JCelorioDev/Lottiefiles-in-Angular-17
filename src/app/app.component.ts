import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo_lottie';

  options: AnimationOptions = {
    path: '/assets/anim/disconnected_animacion.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };
}
