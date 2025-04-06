import React, { useState } from 'react';
import './App.css';
import { Assessment } from './types/Assessment';
import SearchForm from './components/SearchForms';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import ResultsTable from './components/ResultTable';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [results, setResults] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async (query: string, isUrl: boolean, maxResults: number) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);
    try {
      const response = await fetch(`http://127.0.0.1:8000/search?query=${encodeURIComponent(query)}&is_url=${isUrl}&max_results=${maxResults}`);
      console.log(response);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">SHL Assessment Recommendation System</h1>
          <p className="text-gray-600 mb-6">
            Enter a job description or query to find the most relevant assessments for your hiring needs.
          </p>
          
          <SearchForm onSearch={handleSearch} />
        </div>
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : results.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recommended Assessments for: <span className="italic text-blue-600">{searchQuery}</span>
            </h2>
            <ResultsTable assessments={results} />
          </div>
        ) : searchQuery ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No assessments found matching your criteria.</p>
          </div>
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;