import { Suspense } from "react";
import { BrowserRouter,Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback= {<div>Loading...</div>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="react logo" />
                    <ul>
                        {
                            routes.map( ( { to, name } ) => (
                                    <li key= { to }>
                                        <NavLink  to = { to } className={ ({ isActive }) => isActive ? 'nav-active' : '' } > { name } </NavLink>
                                    </li>
                                
                            ))
                        }
                    </ul>
                </nav>
                
                <Routes>
                        {
                            routes.map( ( { path, Component } ) => (<Route 
                                                                        key= {path} 
                                                                        path = { path } 
                                                                        element= { <Component /> } 
                                                                    />)  )
                        }


                    <Route path="/*" element={<Navigate to="/lazy1" replace />} />

                </Routes>
            </div>
        </BrowserRouter>    
    </Suspense>
    
  );
};

export default Navigation;
