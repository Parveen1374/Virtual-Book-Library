import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';
import NotFound from './pages/NotFound'
import BookNavbar from './components/BookNavbar';


const App = () => {
    return (
        <LibraryProvider>
            <Router>
                <BookNavbar/>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/book/:id" element={<BookDetails />} />
                        <Route path="/mylibrary" element={<MyLibrary />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </LibraryProvider>
    );
};

export default App;
