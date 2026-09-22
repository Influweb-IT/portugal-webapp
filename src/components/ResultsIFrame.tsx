import { useRef } from "react";
import { useTranslation } from "react-i18next";

const ResultsIFrame = (props: any) => {
    const { i18n } = useTranslation();
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const baseUrl = "/results-proxy/results.html";
    const iframeURL = `${baseUrl}#${i18n.language}`;

    const handleLoad = () => {
        try {
            const iframeDoc = iframeRef.current?.contentDocument;
            if (!iframeDoc) return;
            const link = iframeDoc.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${window.location.origin}/results-embed.css`;
            iframeDoc.head.appendChild(link);
        } catch (err) {
            console.warn('Could not inject styles into results iframe:', err);
        }
    };

    return (
        <iframe
            ref={iframeRef}
            id="iframe-target"
            src={iframeURL}
            title="Gripenet Results"
            onLoad={handleLoad}
            style={{
                width: '100%',
                height: 'calc(100vh - 160px)',
                minHeight: '750px',
                border: 'none',
                display: 'block'
            }}
        />
    );
};

export default ResultsIFrame;
