import { v4 as uuid } from 'uuid';
import { nanoid } from 'nanoid';
export const productDummy = [
  { id: uuid(), name: 'Product A', price: 20 },
  { id: uuid(), name: 'Product B', price: 15 },
  { id: uuid(), name: 'Product C', price: 25 },
  { id: uuid(), name: 'Product D', price: 35 },
  { id: uuid(), name: 'Product E', price: 105 },
  { id: uuid(), name: 'Product F', price: 25 },
  { id: uuid(), name: 'Product G', price: 90 },
];

export const data = [
  {
    id: nanoid(),
    task: 'Nguyễn Tiến Tài',
    completed: false,
  },
  {
    id: nanoid(),
    task: 'Nguyễn Bảo khang',
    completed: false,
  },
  {
    id: nanoid(),
    task: 'Trần Phi Hoàng',
    completed: true,
  },
  {
    id: nanoid(),
    task: ' Nguyễn Hữu Quyền ',
    completed: false,
  },
  {
    id: nanoid(),
    task: 'Bùi Huỳnh Quốc Trung',
    completed: false,
  },
];
