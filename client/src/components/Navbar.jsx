import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { useAppContext } from '../context/AppContext.jsx'
import { useState } from 'react'
import toast from 'react-hot-toast'

function Navbar() {
    const [open, setOpen] = useState(false);
    const { user, setUser, setShowUserLogin, navigate, setSearchQuery,
             searchQuery, getCartAmount, getCartCount, axios } = useAppContext();

    const logout = async () => {
        try {
            const { data } = await axios.get('/api/user/logout', { withCredentials: true });
            if(data.success){
                toast.success(data.message);
                setUser(null);
                navigate('/');
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if(searchQuery.length > 0){
            navigate("/products");
        }
    }, [searchQuery]);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            <NavLink to='/' onClick={() => setOpen(false)}>
                <img className='h-9' src={assets.logo} alt='logo' />
            </NavLink>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 ml-7">
                <NavLink to="/" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
                    <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Home</span>
                </NavLink>

                <NavLink to="/products" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">All Products</span>
                    <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">All Products</span>
                </NavLink>

                <NavLink to="/" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
                    <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Contact</span>
                </NavLink>
                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt='search' className='w-4 h-4' />
                </div>
                {/* Cart Icon */}
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
                    <button  className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                {/* Login Button */}
                {!user ? (<button onClick={() =>{
                    setOpen(false);
                    setShowUserLogin(true);
                }} 
                    className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>) : (
                    <div className='relative group border-[3px] rounded-full border-gray-600 cursor-pointer'>
                        <img src={assets.profile_icon} className='w-10' alt='profile icon'/>
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li onClick={() => navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/20 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/20 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <div className='flex items-center gap-6 sm:hidden'>
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
                    <button  className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu">
                    <img src={assets.menu_icon} alt='menu' />
                </button>
            </div>

            {/* Mobile Menu */}
            { open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to='/products' onClick={() => setOpen(false)}>All Products</NavLink>
                    {user && (
                        <NavLink to='/products' onClick={() => setOpen(false)}>My Orders</NavLink>
                    )}
                    <NavLink to='/' onClick={() => setOpen(false)}>Contact</NavLink>

                    {!user ? (
                        <button onClick={() =>{ setOpen(false); setShowUserLogin(true);}} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar;
