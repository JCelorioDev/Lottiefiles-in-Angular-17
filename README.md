# How to use the lottie library in angular 17 here I explain it to you

1) The first thing we have to do:

npm i lottie-web ngx-lottie

2) Configuring the app.config.ts file:

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

  providers: [provideLottieOptions({
    player: () => player
  })]

3) We configure our component:

  options: AnimationOptions = {
    path: '/assets/animation.json', 
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  We forgot to import lottie component

  4) In our html component we paste this template:

<ng-lottie
width="500px"
height="600px"
containerClass="moving-box"
[styles]="styles"
[options]="options"
(animationCreated)="animationCreated($event)"
/>

