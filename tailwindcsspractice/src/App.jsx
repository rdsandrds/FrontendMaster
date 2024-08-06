import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // // const [isOpen, setIsOpen] = useState(false);

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Handle login logic
    }
  };


  // const products = [
  //   { id: 1, name: 'Product 1', price: '$29.99', image: 'https://images.unsplash.com/photo-1722809431357-9403c62c46dc?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  //   { id: 2, name: 'Product 2', price: '$19.99', image: 'https://images.unsplash.com/photo-1722809431357-9403c62c46dc?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  //   { id: 3, name: 'Product 3', price: '$39.99', image: 'https://images.unsplash.com/photo-1722809431357-9403c62c46dc?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // ];

  return (
    <>
    {/* <div className="h-screen w-screen p-52 bg-green-100">
      <div className="h-20 w-20  bg-red-200">
       <div className='h-10 w-10 bg-blue-400  '></div>
     </div>
     </div> */}

{/* <div className='flex justify-center h-screen items-center'>
<div className='flex w-1/5  bg-blue-300 rounded-xl'>
   <div class="flex  items-center space-x-4">
  <img className='object-cover h-16 w-16 rounded-full object-top' src="https://images.unsplash.com/photo-1722756090869-8d74046e4989?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <div >
    <strong>Andrew Alfred</strong>
    <div>Technical advisor</div>
  </div>
</div>
   </div>
</div> */}
  
   
  {/* <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl">Hello, Tailwind!</h1>
    </div> */}

    {/* <div className='flex items-center justify-center h-screen '>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">
      Hover me
    </button>
    </div> */}
     {/* <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover object-center md:w-48" src="https://images.unsplash.com/photo-1722756090869-8d74046e4989?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
          <p className="mt-2 text-gray-500">This is a description of the card. It has a responsive layout.</p>
        </div>
      </div>
    </div> */}
     {/* <nav className="bg-gray-800"> */}
      {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://via.placeholder.com/40" alt="Logo" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div> */}
      {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-green-200 p-4">Item 1</div>
        <div class="bg-green-200 p-4">Item 2</div>
        <div class="bg-green-200 p-4">Item 3</div>
        <div class="bg-green-200 p-4">Item 4</div>
        <div class="bg-green-200 p-4">Item 5</div>
        <div class="bg-green-200 p-4">Item 6</div>
    </div> */}
     {/* <nav class="bg-gray-800 p-4">
        <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">About</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Contact</a></li>
        </ul>
    </nav> */}
    {/* <div className='p-8'>
    <form class="space-y-4">
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none  focus:border-blue-500"/>
        </div>
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Submit
        </button>
    </form>
    </div> */}

{/* <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1722809431357-9403c62c46dc?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-gray-900  opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Our Product</h1>
        <p className="mt-4 text-lg">Revolutionizing the way you do business.</p>
        <button className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>     */}

{/* <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-gray-100 shadow-lg rounded-lg p-4">
            <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
            <div className="mt-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> */}

{/* <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <img className="w-32 h-32 rounded-full mx-auto" src="https://images.unsplash.com/profile-1610519305252-c9d552283aaaimage?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="User avatar" />
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.23 4.02 9.53 9.14 9.95V15h-2.71v-3h2.71v-2.16c0-2.69 1.62-4.16 4.07-4.16 1.18 0 2.41.21 2.41.21v2.64h-1.36c-1.34 0-1.76.83-1.76 1.68V12h2.91l-.46 3h-2.45v6.95C18 21.53 22 17.23 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.58 2.17-2.73-.96.57-2.03.98-3.16 1.2-.91-.97-2.22-1.58-3.66-1.58-2.77 0-5.02 2.25-5.02 5.02 0 .39.04.76.13 1.12-4.18-.21-7.88-2.21-10.36-5.25-.43.75-.67 1.62-.67 2.55 0 1.76.9 3.32 2.26 4.23-.84-.03-1.64-.26-2.33-.64v.07c0 2.45 1.74 4.5 4.04 4.97-.42.12-.87.18-1.33.18-.32 0-.64-.03-.95-.09.64 2 2.49 3.44 4.68 3.48-1.72 1.35-3.88 2.15-6.23 2.15-.4 0-.79-.02-1.18-.07 2.22 1.42 4.86 2.25 7.69 2.25 9.24 0 14.3-7.66 14.3-14.3l-.02-.65c.98-.71 1.82-1.6 2.48-2.61z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.54 3.03 8.35 7.28 9.67.53.1.72-.23.72-.51v-1.78c-2.96.64-3.58-1.44-3.58-1.44-.48-1.21-1.17-1.53-1.17-1.53-.96-.66.07-.65.07-.65 1.06.07 1.61 1.1 1.61 1.1.95 1.62 2.49 1.15 3.1.88.1-.69.37-1.15.66-1.41-2.36-.27-4.85-1.18-4.85-5.22 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.35.1-2.81 0 0 .89-.28 2.93 1.08.85-.24 1.76-.36 2.67-.36.91 0 1.82.12 2.67.36 2.04-1.36 2.93-1.08 2.93-1.08.57 1.46.21 2.54.1 2.81.67.74 1.08 1.67 1.08 2.82 0 4.06-2.49 4.95-4.86 5.22.37.32.69.95.69 1.92v2.85c0 .28.18.61.73.51 4.25-1.32 7.28-5.13 7.28-9.67 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div> */}
      {/* <div className="p-6 h-screen w-full bg-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Pricing Plans</h2>
          <p className="mt-4 text-gray-600">Choose a plan that suits your needs.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <div className="text-center bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Basic</h3>
            <p className="mt-2 text-gray-600">$9/month</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700">Feature 1</li>
              <li className="text-gray-700">Feature 2</li>
              <li className="text-gray-700">Feature 3</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
         
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="mt-2 text-gray-600">$29/month</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700">Feature 1</li>
              <li className="text-gray-700">Feature 2</li>
              <li className="text-gray-700">Feature 3</li>
              <li className="text-gray-700">Feature 4</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Enterprise</h3>
            <p className="mt-2 text-gray-600">$99/month</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700">Feature 1</li>
              <li className="text-gray-700">Feature 2</li>
              <li className="text-gray-700">Feature 3</li>
              <li className="text-gray-700">Feature 4</li>
              <li className="text-gray-700">Feature 5</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div> */}

{/* <div className="flex   h-screen bg-gray-100">
     
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold">Dashboard</h2>
        </div> 
        <nav className="mt-8">
          <ul className="space-y-2">
            <li><a href="#" className=" block py-2 px-4 text-gray-700 hover:bg-gray-200">Home</a></li>
            <li><a href="#" className=" block py-2 px-4 text-gray-700 hover:bg-gray-200">Profile</a></li>
            <li><a href="#" className=" block py-2 px-4 text-gray-700 hover:bg-gray-200">Settings</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold">Widget 1</h3>
            <p className="mt-2 text-gray-600">Content for widget 1.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold">Widget 2</h3>
            <p className="mt-2 text-gray-600">Content for widget 2.</p>
          </div>
         
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold">Widget 3</h3>
            <p className="mt-2 text-gray-600">Content for widget 3.</p>
          </div>
        </div>
      </div>
    </div> */}

{/* <div className='p-8'>
      <button onClick={toggleModal} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Modal Title</h2>
            <p className="mt-4">This is the content of the modal.</p>
            <div className="mt-8 flex justify-center space-x-4">
              <button onClick={toggleModal} className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700">
                Cancel
              </button>
              <button onClick={toggleModal} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div> */}

{/* <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.23 4.02 9.53 9.14 9.95V15h-2.71v-3h2.71v-2.16c0-2.69 1.62-4.16 4.07-4.16 1.18 0 2.41.21 2.41.21v2.64h-1.36c-1.34 0-1.76.83-1.76 1.68V12h2.91l-.46 3h-2.45v6.95C18 21.53 22 17.23 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.58 2.17-2.73-.96.57-2.03.98-3.16 1.2-.91-.97-2.22-1.58-3.66-1.58-2.77 0-5.02 2.25-5.02 5.02 0 .39.04.76.13 1.12-4.18-.21-7.88-2.21-10.36-5.25-.43.75-.67 1.62-.67 2.55 0 1.76.9 3.32 2.26 4.23-.84-.03-1.64-.26-2.33-.64v.07c0 2.45 1.74 4.5 4.04 4.97-.42.12-.87.18-1.33.18-.32 0-.64-.03-.95-.09.64 2 2.49 3.44 4.68 3.48-1.72 1.35-3.88 2.15-6.23 2.15-.4 0-.79-.02-1.18-.07 2.22 1.42 4.86 2.25 7.69 2.25 9.24 0 14.3-7.66 14.3-14.3l-.02-.65c.98-.71 1.82-1.6 2.48-2.61z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.54 3.03 8.35 7.28 9.67.53.1.72-.23.72-.51v-1.78c-2.96.64-3.58-1.44-3.58-1.44-.48-1.21-1.17-1.53-1.17-1.53-.96-.66.07-.65.07-.65 1.06.07 1.61 1.1 1.61 1.1.95 1.62 2.49 1.15 3.1.88.1-.69.37-1.15.66-1.41-2.36-.27-4.85-1.18-4.85-5.22 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.35.1-2.81 0 0 .89-.28 2.93 1.08.85-.24 1.76-.36 2.67-.36.91 0 1.82.12 2.67.36 2.04-1.36 2.93-1.08 2.93-1.08.57 1.46.21 2.54.1 2.81.67.74 1.08 1.67 1.08 2.82 0 4.06-2.49 4.95-4.86 5.22.37.32.69.95.69 1.92v2.85c0 .28.18.61.73.51 4.25-1.32 7.28-5.13 7.28-9.67 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; 2023 Company. All rights reserved.</p>
        </div>
      </div>
    </footer> */}
{/* <div className="bg-yellow-400  h-screen overflow-hidden flex items-center justify-center">
<div className=" bg-white p-8 lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
</div> */}

<div className="py-12 h-screen overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="mt-4 text-gray-600">Explore the amazing features of our product.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <svg className="h-12 w-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1.5 21h21L12 2zm0 4.83L18.39 19H5.61L12 6.83zM12 17a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <h3 className="mt-4 text-lg font-bold">Feature 1</h3>
            <p className="mt-2 text-gray-600">Description of feature 1.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <svg className="h-12 w-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1.5 21h21L12 2zm0 4.83L18.39 19H5.61L12 6.83zM12 17a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <h3 className="mt-4 text-lg font-bold">Feature 2</h3>
            <p className="mt-2 text-gray-600">Description of feature 2.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <svg className="h-12 w-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1.5 21h21L12 2zm0 4.83L18.39 19H5.61L12 6.83zM12 17a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <h3 className="mt-4 text-lg font-bold">Feature 3</h3>
            <p className="mt-2 text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </div>
    </div>





    </>
  )
}

export default App
