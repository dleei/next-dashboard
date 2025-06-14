import { memo } from 'react'
import type { FC, ReactNode } from 'react'

const Invoices: FC<{
  children?: ReactNode
}> = () => {
  return <div>Invoices</div>
}

export default memo(Invoices)
