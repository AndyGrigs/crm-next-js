import React from 'react'
import Header from '../../components/header'

export interface Props {
  params: {
    id: string[]
  }
}

const Page = ({ params: { id } }: Props) => {
  return (
<Header>Company {id}</Header>  
    )
}

export default Page   