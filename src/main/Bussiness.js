import React from 'react'
import News from './components/News'
export default function Bussiness() {
  return (
    <div>
  <News
   pageSize="6"
      country="us"
      category="general"
      />
    </div>
  )
}
