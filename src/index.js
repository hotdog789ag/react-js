import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './demo';
// import Greeting from './greeting';
// import Footer from './greetingFooter';
// import MyButton from './button';
// import MyNav from './myNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';// import luôn ở trên trước 
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <React.Fragment>
//        <App/>
//         <MyNav/>
//         <Greeting fullName="Nguyễn Trọng Duy"/>
//         <br/>
//         <Greeting fullName="Nguyễn Trọng Nghĩa"/>
//         <br/>
//         <Greeting/>
//         <br/>
//         <MyButton/>
//         <hr/>
//         <Footer copyright = "By Duy" nowdate={Date().toLocaleString()} />
//     </React.Fragment>

// )


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
reportWebVitals();
