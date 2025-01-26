import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 10); // Только цифры, длина — 10

export function generateId() {
  return parseInt(nanoid(), 10)
}
