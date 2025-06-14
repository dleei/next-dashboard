import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Customers: FC<IProps> = () => {
  return (<div>Customers</div>)
}

export default memo(Customers)