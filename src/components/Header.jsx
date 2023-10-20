import React, { useRef } from 'react'
import { Navbar ,Button ,Label,TextInput  } from 'flowbite-react'
import { api_key, now } from '../Api/MovieApi'
import { useDispatch } from 'react-redux';
import { Fetchmovie } from '../Redux/action/movies';

const Header = () => {
  const sr = useRef('');

  const dispatch = useDispatch()

  const searching = async() => { 
    if(sr.current.value !== ''){

      const res = await now.get(`/search/movie?query=${sr.current.value}&api_key=${api_key}`)


      
      dispatch(Fetchmovie(res.data.results))
      
    }
   }
  return ( 
    <Navbar fluid rounded>
    <Navbar.Brand href="https://flowbite-react.com">
      {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
      <a href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Channal NativE</span>
      </a>
    </Navbar.Brand>
    <div className="flex md:order-2">
    <div>
         
        <div className="flex">
        <TextInput
          id="email2"
          placeholder="Search"
          required
          shadow
          type="email"
          ref={sr}
        />
        <Button onClick={() => searching()}>
        Default
      </Button>
        </div>
      </div>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/home" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="about">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header