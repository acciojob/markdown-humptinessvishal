import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

const App = () => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="app">
            <textarea className="textarea" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <div className="preview">
                {
                    loading ? (
                        <p className="loading">Loading...</p>
                    ) : (
                        <ReactMarkdown>{text}</ReactMarkdown>
                    )
                }
            </div>
        </div>
    );
};

export default App;