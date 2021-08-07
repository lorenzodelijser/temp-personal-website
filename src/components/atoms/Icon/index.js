import React from 'react'

import CodePen from './Icons/Social/CodePen'
import Dev from './Icons/Social/Dev'
import Dribbble from './Icons/Social/Dribbble'
import Figma from './Icons/Social/Figma'
import GitHub from './Icons/Social/GitHub'
import LinkedIn from './Icons/Social/LinkedIn'
import ProductHunt from './Icons/Social/ProductHunt'
import Twitter from './Icons/Social/Twitter'

const iconElements = (props) => ({
  'codepen': <CodePen {...props} />,
  'dev': <Dev {...props} />,
  'dribbble': <Dribbble {...props} />,
  'figma': <Figma {...props} />,
  'github': <GitHub {...props} />,
  'linkedin': <LinkedIn {...props} />,
  'producthunt': <ProductHunt {...props} />,
  'twitter': <Twitter {...props} />
})

const Icon = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export const icons = Object.keys(iconElements())

export default Icon
