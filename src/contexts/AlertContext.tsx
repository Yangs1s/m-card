import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Alert from '@shared/Alert'

type AlertProps = ComponentProps<typeof Alert>
// open을 제외 나머지 프롭스
type AlertOptions = Omit<AlertProps, 'open'>

interface AlertContextValue {
  open: (options: AlertOptions) => void
}

const Context = createContext<AlertContextValue | undefined>(undefined)

const defaultOptions: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
}

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertState, setAlertState] = useState(defaultOptions)

  const $portal_root = document.getElementById('root-portal')

  const close = useCallback(() => {
    setAlertState(defaultOptions)
  }, [])

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onButtonClick: () => {
          close()
          onButtonClick && onButtonClick()
        },
        open: true,
      })
    },
    [close],
  )

  const values = useMemo(() => ({ open }), [open])
  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root !== null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
    </Context.Provider>
  )
}

export const useAlertContext = () => {
  const values = useContext(Context)

  if (!values) {
    throw new Error('AlertContext 내부서 사용')
  }

  return values
}
