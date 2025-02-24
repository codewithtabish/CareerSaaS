import {  ConfettiDemo, fireConfetti } from '@/components/general/celebration'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div className='py-12'>
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque eveniet commodi voluptatibus, inventore excepturi consectetur impedit amet officiis similique tempora fugiat voluptatum non? Suscipit cumque aperiam vitae tenetur facere!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque eveniet commodi voluptatibus, inventore excepturi consectetur impedit amet officiis similique tempora fugiat voluptatum non? Suscipit cumque aperiam vitae tenetur facere!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque eveniet commodi voluptatibus, inventore excepturi consectetur impedit amet officiis similique tempora fugiat voluptatum non? Suscipit cumque aperiam vitae tenetur facere!
    <Button
    onClick={fireConfetti}
    >
      Click Me
    </Button>
    {/* <ConfettiDemo/> */}
    </div>
  )
}

export default HomePage
