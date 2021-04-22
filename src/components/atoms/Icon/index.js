import * as React from 'react'

import Dribbble from './Icons/Social/Dribbble'
import GitHub from './Icons/Social/GitHub'
import LinkedIn from './Icons/Social/LinkedIn'
import Twitter from './Icons/Social/Twitter'

const iconElements = (props) => ({
  'dribbble': <Dribbble {...props} />,
  'github': <GitHub {...props} />,
  'linkedin': <LinkedIn {...props} />,
  'twitter': <Twitter {...props} />
})

const Icon = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export const icons = Object.keys(iconElements())

export default Icon
