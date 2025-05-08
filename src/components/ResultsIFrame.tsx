import { useTranslation } from "react-i18next";
import IframeResizer  from "@iframe-resizer/react";

const ResultsIFrame = (props: any) => {
    const { i18n } = useTranslation();

    const baseUrl = "https://hivlab.github.io/gripiradar/";
    const iframeURL = `${baseUrl}#${i18n.language}`;

    return (
        <IframeResizer
            id="iframe-target"
            license="GPLv3"
            src={iframeURL}
            style={{ width: '100%',  height: '100vh' }}
        />
    );
};

export default ResultsIFrame;
