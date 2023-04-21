import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
// import { useSelector, useDispatch } from "react-redux";
// import { cart } from '../../slice/cartSlice';

export default function EmptyCart() {
    // const cartProduct = useSelector(cart);
    
  return (
    <div className='space-y-4'>

        {/* Empty cart Image */}
        {/* <div className='flex items-center justify-center relative'>
          <Image 
          src={'/consumer_empty_cart.webp'}
          height={250}
          width={250}
          alt="emptycart"
          />
        </div> */}

        {/* Below Image */}
        {/* <div className='space-y-2'>
          <b>It's lonely in here...</b>
          <p>Why don't you check some products on our Store?</p>
          <Link href={'/'}><button className='rounded-xl p-2.5 px-24 text-white bg-black mt-6'>Explore Store</button></Link>
        </div> */}

        {/* {(!cartProduct?.cart || !cartProduct?.cart.length) && ( */}
            <div className="pb-2 text-center">
              <Link href={"/"}>
                <p className="hover:text-blue-500">Continue Shopping...</p>
              </Link>
            </div>
          {/* // )} */}

    </div>
  )
}