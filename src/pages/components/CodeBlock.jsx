import React, { useEffect } from 'react';
import Prism, { languages } from 'prismjs';
import 'prismjs/themes/prism.css';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';


const CodeBlock = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    
    return (
        <pre style={{fontSize: '1.8em', fontFamily: 'sans-serif'}} tabIndex="0"> 
            <code className={`language-${language}`} style={{ fontSize: '1rem' }}>
                {code}
            </code>
        </pre>
    );
};
CodeBlock.propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.oneOf(Object.keys(languages)).isRequired,
    // language: PropTypes.oneOf(Object.keys(languages)).isRequired,
};


export default CodeBlock;