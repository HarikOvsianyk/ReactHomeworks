import { v4 as uuidv4 } from 'uuid';
export const id = () => uuidv4().slice(1,8);