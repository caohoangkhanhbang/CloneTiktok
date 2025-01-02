
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Following from './pages/Following'
import { publicRoutes } from './routes';
// import DefaultLayout from './components/Layout/DefaultLayout';
import { DefaultLayout } from './components/Layout'
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Cách 2 link qua thư mục routes */}
          {publicRoutes.map((page, index) => {
            let Layout = page.layout === null ? Fragment : page.layout ? page.layout : DefaultLayout;
            console.log(Layout);


            const Page = page.component;
            return (< Route key={index} path={page.path} element={
              <Layout>
                <Page />
              </Layout>
            } />)
          })}


          {/* Cách 1 để trực tiếp tại đây */}
          {/* <Route path='/' element={<Home />}></Route>
          <Route path='/following' element={<Following />}></Route> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
