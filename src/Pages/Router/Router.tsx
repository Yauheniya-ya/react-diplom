import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigations";
import Account from "../Account";
import Authorization from "../Auth";
import DetailPage from "../BookDetailPage/DetailPage";

import CartPage from "../Cart/Cart";

import { FavouritesPage } from "../Favorites/FavPage";
import { MainPage } from "../Main/MainPaige";
import Page404 from "../Page404";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/books/:isbn13" element={<DetailPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<Account />} />

        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
