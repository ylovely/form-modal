import { Message } from 'element-react';

export function generateDynamicKey(): string {
  return 'https://shimo.im/doc/' + 'sKBFKsadfjh394sfTE'; // TODO need to refactor, should return a random string key.
}

export function generateDynamicPassword(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const len = chars.length;
  return [1, 2, 3, 4].map(() => chars.charAt(Math.floor(Math.random() * len))).join('');
}

export function showSuccessMessage(message: string): void {
  Message.success({
    message,
    customClass: 'message-tip'
  })
}

export function displayStyle(isShow: boolean): object {
  return {
    display: isShow ? 'block' : 'none'
  }
}

export function getNowDate(): Date {
  return new Date();
}

export function getNowTime(): Date {
  const now = getNowDate();
  return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), 0);
}