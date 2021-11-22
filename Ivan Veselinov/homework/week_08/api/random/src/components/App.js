import SearchForm from './SearchForm';
import Phone from './Phone';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <h1>Random Program</h1>
      <SearchForm />
      <h1>Phone API</h1>
      <Phone />
      <Weather />
    </div>
  );
}

export default App;
