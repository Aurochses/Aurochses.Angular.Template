import { Component } from '@angular/core';

@Component({
  selector: 'aur-toolbar-full-screen',
  templateUrl: './full-screen.component.html'
})
export class FullScreenComponent {

  toggleFullscreen() {
    const fullscreenEnabled = document.fullscreenElement
      || (<any>document).msFullscreenElement
      || (<any>document).mozFullScreen
      || document.webkitIsFullScreen;

    if (!fullscreenEnabled) {
      const func = (document.documentElement['requestFullscreen'])
        || (document.documentElement['webkitRequestFullscreen'])
        || (document.documentElement['webkitRequestFullScreen'])
        || (document.documentElement['msRequestFullscreen'])
        || (document.documentElement['mozRequestFullScreen']);

      if (func) {
        func.call(document.documentElement);
      }

    } else {
      const func = (document['exitFullscreen'])
        || (document['webkitExitFullscreen'])
        || (document['webkitCancelFullScreen'])
        || (document['msExitFullscreen'])
        || (document['mozCancelFullScreen']);

      if (func) {
        func.call(document);
      }
    }
  }

}
