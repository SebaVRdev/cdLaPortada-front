import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FolderTokenService {
  
  constructor() { }

  genKey(seed: string) {
    const reversedSeed = seed.split('').reverse().join('');
    seed = btoa(reversedSeed);
    const keyArr = [
      seed.charAt(0),
      Math.random().toString(36).substr(2, 2).toUpperCase(),
      ...seed.substr(1, seed.length-2),
      Math.random().toString(36).substr(2, 1).toUpperCase(),
      seed.substr(-1)
    ];
    return keyArr.join('');
  }

  qpIsiInsert(){
    let nanoid=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};
    let _qpIsi = nanoid();
    _qpIsi = this.genKey(_qpIsi);
    sessionStorage.setItem('_qpIsi', _qpIsi);
  }
}
