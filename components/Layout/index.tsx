import styles from './styles.module.scss'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props ) => {
  return (
    <main className={`${styles.LayoutMain} container min-h-screen mx-auto py-10`}>
      <div className={`${styles.LayoutCard}`}>
        {children}
      </div>
    </main>
  )
};