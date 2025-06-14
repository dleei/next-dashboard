import { memo } from 'react'
import type { FC, ReactNode } from 'react'



const Customers: FC<{
  children?: ReactNode
}> = () => {
  return (<div>Customers</div>)
}

export default memo(Customers)