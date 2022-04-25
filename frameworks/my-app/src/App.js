import styled from 'styled-components';

// Components
import Navigate from './components/navigate';
import Home from './pages/Home';

(function(){
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');
})();

const Main = styled.main`
  width:100%;
  height:100vh;
  display:flex;
  flex-flow:column;

`;

function App() {
  return (
    <>
      <Navigate />
      <Main className="p-6">
        <header className="App-header">
          <Home/>
        </header>
      </Main>
    </>
  );
}

export default App;
