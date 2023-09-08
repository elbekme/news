import { lazy, Suspense } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/loading/Loading';
import './App.css';

// import Business from './pages/BusinessPage';
// import Entertainment from './pages/EntertainmentPage';
// import General from './pages/GeneralPage';
// import Health from './pages/HealthPage';
// import Home from './pages/HomePage';
// import NotFound from './pages/NotFound';
// import Science from './pages/SciencePage';
// import Sports from './pages/SportsPage';
// import Technology from './pages/TechnologyPage';

const PostsPage =  lazy(() =>import('./pages/PostsPage'));
const  Business = lazy(() =>import('./pages/BusinessPage'));
const  Entertainment = lazy(() =>import('./pages/EntertainmentPage'));
const  General  = lazy(()=>import( './pages/GeneralPage'));
const  Health = lazy(()=>import( './pages/HealthPage'));
const  Home = lazy(()=>import( './pages/HomePage'));
const  NotFound = lazy(()=>import( './pages/NotFound'));
const  Science = lazy(()=>import( './pages/SciencePage'));
const  Sports = lazy(()=>import( './pages/SportsPage'));
const  Technology = lazy(()=>import( './pages/TechnologyPage'));
const  PostPage = lazy(() => import( './pages/PostPage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/business' element={<Business />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/general' element={<General />} />
          <Route path='/health' element={<Health />} />
          <Route path='/science' element={<Science />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/posts/:postId' element={<PostPage />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
