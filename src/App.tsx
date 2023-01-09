import { Routes, Route } from 'react-router-dom';
import { HomePage, FavoritesPage } from './pages';
import { Navigation } from './components';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
