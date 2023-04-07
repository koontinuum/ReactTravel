import React from 'react'
import useTheme from '../hooks/useTheme'
import cn from 'classnames'


const Layout = ({children}) => {
	const {isDark} = useTheme()
  return (
	<div className={cn('Layout',{
		dark: isDark,
	})}>
	  {children}
	</div>
  )
}

export default Layout
