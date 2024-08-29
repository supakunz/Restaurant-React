import React from 'react'
import Header from '../Components/header/Header'
import BookTable from '../Components/booktable/BookTable'

const Booking = () => {
  return (
    <>
      <Header header={'BOOK A TABLE'} />
      <BookTable />
    </>
  )
}

export default Booking