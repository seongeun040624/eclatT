import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

import Home from './pages/Home'

import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
//import Gift from './pages/Gift';
import Shop from './pages/Shop';
import Story from './pages/Story';

import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import Detail from './pages/Detail';


export const DataContext = createContext()

import './App.css'

function App() {

  return (
    <>
		<BrowserRouter>
			<ScrollTop />
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/perfume" element={<Shop />} />
					<Route path="/shop/cream" element={<Shop />} />
					<Route path="/shop/oil" element={<Shop />} />
					<Route path="/shop/gift" element={<Shop />} />

					<Route path="/story" element={<Story />} />
					{/* <Route path="/gift" element={<Gift />} /> */}
					{/* <Route path="/detail:id" element={<Detail />} /> */}
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
				<Footer />
		</BrowserRouter>
    </>
  )
}

export default App
