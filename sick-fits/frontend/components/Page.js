import React from 'react'

const Page = ({children, cool}) => {
  return (
    <div>
    <p>I am the Page component</p>
    {children}
    <code>{cool}</code>
    </div>

  )
}

export default Page