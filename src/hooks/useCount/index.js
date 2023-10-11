//* LIB
import { useContext } from 'react';

//* STORE
import { namContext } from 'src/contexts';

export default function useCount() {
  return useContext(namContext);
}
