import { useMask } from '@react-input/mask'

export const useDateMask = () => {
  return useMask({
    mask: 'dd.mm.yyyy',
    replacement: { d: /\d/, m: /\d/, y: /\d/ },
  })
}
