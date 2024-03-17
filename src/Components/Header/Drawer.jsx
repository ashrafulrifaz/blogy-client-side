import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import useCategories from '../../Hooks/useCategories';
import { useQuery } from '@tanstack/react-query';

const drawerItems = [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '/about',
        name: 'about'
    },
    {
        path: '/terms&conditions',
        name: 'terms & conditions'
    },
    {
        path: '/privacy-policy',
        name: 'privacy policy'
    },
]

const Drawer = ({setOpenDrawer}) => {
    const {user, signOutUser} = useContext(AuthContext)
    const {categories} = useCategories()

    const { isPending, data: userRole } = useQuery({
        queryKey: ['user_role'],
        queryFn: () =>
            fetch(`http://localhost:5000/user-role/${user?.email}`)
            .then((res) =>
                res.json(),
            )
    })

    const handleDrawer = () => {
        setOpenDrawer(false)
    }

    return (        
        <div className={`drawer-side z-40`}>
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={handleDrawer}></label>
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                <li>
                    <Link onClick={handleDrawer} to="/">
                        <img src={logo} className='w-3/4' alt="logo"/>
                    </Link>
                </li>
                {
                    drawerItems?.map((item, idx) => (
                        <li key={idx}>
                            <NavLink onClick={handleDrawer} to={`${item.path}`} className="capitalize">{item.name}</NavLink>
                        </li>
                        ))
                }  
                {
                    
                    userRole?.role === 'admin' &&
                    <li>
                        <NavLink onClick={handleDrawer} to='/dashboard/home' className="capitalize">Dashboard</NavLink>
                    </li>
                }
                <hr className='h-0.5 bg-slate-500 mx-4 my-2' /> 
                <li>
                    <NavLink onClick={handleDrawer} to="/latest">Latest</NavLink>
                </li>
                {
                    categories?.map(category => (
                        <li key={category._id}>
                           <NavLink onClick={handleDrawer} to={`/${category.slag}`} className="capitalize">{category.name}</NavLink>
                        </li>
                     ))
                }  
                <hr className='h-0.5 bg-slate-500 mx-4 my-2' />
                <li className='p-4'>
                    {
                        user ? 
                        <button onClick={() => {
                            signOutUser()
                            setOpenDrawer(false)                            
                        }} className="py-2 w-1/2 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all text-sm">Log Out</button>
                        :
                        <Link onClick={handleDrawer} to="/login" className='p-0'>
                           <button className="py-1.5 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all">Login</button>
                        </Link>    
                    }
                </li>      
            </ul>
        </div>
    );
};

Drawer.propTypes = {
    setOpenDrawer: PropTypes.object
}

export default Drawer;