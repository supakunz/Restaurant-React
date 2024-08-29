import React from 'react'
import PopularMenu from '../assets/popular'
import CartMenu from '../cartMenu/CartMenu'

const MenuPage = () => {
  return (
    <>
      <section>
        <div className='container-section py-[100px]'>
          <div className='flex justify-between flex-col sm:flex-row gap-6'>
            <div className='flex gap-6 flex-col sm:flex-row'>
              <select className='py-2 pl-2 pr-5 outline-none border-solid border-[2px]' name="" id="">
                <option value="All">Category (All)</option>
                <option value="Burger">Burger</option>
                <option value="Drink">Drink</option>
                <option value="Fried">Fried</option>
                <option value="Pizza">Pizza</option>
                <option value="Steak">Steak</option>
              </select>
              <select className='py-2 pl-2 pr-8 outline-none border-solid border-[2px]' name="" id="">
                <option value="All">Rates (All)</option>
                <option value="0">0</option>
                <option value="0.5">0.5</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='flex'>
              <input className='p-2 outline-none border-solid border-[2px] w-full' type="text" placeholder='Search name here...' />
              <button className='bg-yellow text-[20px] h-[40px] w-[40px]'><i class='bx bx-search-alt-2'></i></button>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[3rem] sm:mt-[4rem] gap-6'>
              {PopularMenu.map((item) => {
                return <CartMenu name={item.name} image={item.image} details={item.details} category={item.category} price={item.price} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuPage