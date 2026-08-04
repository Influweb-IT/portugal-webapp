import { useTranslation } from "react-i18next";

const ResultsIFrame = (props: any) => {
    const { i18n } = useTranslation();

    const baseUrl = "https://storage.googleapis.com/gripenetpt-results/results.html";
    const iframeURL = `${baseUrl}#${i18n.language}`;

    return (
        <iframe
            id="iframe-target"
            src={iframeURL}
            title="Gripenet Results"
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
