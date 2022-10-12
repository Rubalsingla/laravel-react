/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//import './components/Example';
import './bootstrap';
// Register React components
import './components/Example';
import User from './components/User';
import ReactDOM from 'react-dom';
import About from "./components/About";
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
function MyApp() {
    return (
        <Routes>
            <Route path="/" element={<User /> } />
            <Route path="/about" element={<About /> } />
        </Routes>
        
       
    );
}
export default MyApp;
if (document.getElementById('app')) {
    ReactDOM.render(<Router><MyApp /></Router>, document.getElementById('app'));
}

