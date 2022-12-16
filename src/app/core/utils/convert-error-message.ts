import { messageConfig } from '../constants/message.const';

export function convertMessage(message: string): string {
  return messageConfig.find(el => el.message === message)?.message ?? 'Error';
}
