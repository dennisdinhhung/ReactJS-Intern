import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownPreview.css';

const MarkdownPreview = () => {
    const [markdown, setMarkdown] = useState('# markdown preview');

    useEffect(() => {
        document.title = markdown;
    }, [markdown]);

    return (
        <main>
            <section className="markdown">
                <textarea
                    className="input"
                    value={markdown}
                    onChange={e => setMarkdown(e.target.value)}
                >
                </textarea>
                <article className="result">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </article>
            </section>
        </main>
    )
}

export default MarkdownPreview;
