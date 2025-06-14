import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Invoices: FC<IProps> = () => {
  return (<div>Invoices</div>)
}

export default memo(Invoices)