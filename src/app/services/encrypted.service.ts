import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
export const ENCRYPKEY: string = 'TJebkA5l#';
export const CLAVEID: string = 'KfdfoM#hJ';

@Injectable({
  providedIn: 'root'
})
export class EncryptedService {

  constructor() { }

  encrypted(noencrypted_text: string, customEncrypKey: string = 'not assigned'): string {
    const key = customEncrypKey === 'not assigned' ? ENCRYPKEY : customEncrypKey;
    const encrypted_text = CryptoJS.AES.encrypt(noencrypted_text, key);
    return encrypted_text.toString();
  }

  decrypted(encrypted_text: string, customEncrypKey: string = 'not assigned'): string {
    const key = customEncrypKey === 'not assigned' ? ENCRYPKEY : customEncrypKey;
    if (encrypted_text !== null && encrypted_text !== '') {
      const bytes = CryptoJS.AES.decrypt(encrypted_text, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted.toString();
    }
    return '';
  }

  generateId(n: number) {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#/&$=|?_';
    for (let i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text.toString();
  }

}
