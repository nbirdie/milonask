import React from "react";
import { WrongPageWrapper } from "./UrlChecker.styles";
import { ReactComponent as RedLeaf1Svg } from "../../assets/leaves/red-leaf-1.svg";

export const UrlChecker = ({ children }) => {
    const checkUrlParams = () => {
        const queryParameters = new URLSearchParams(window.location.search);
        return (
            queryParameters.get("utm_source") &&
            queryParameters.get("utm_campaign")
        );
    };

    return (
        <>
            {checkUrlParams() ? (
                children
            ) : (
                <WrongPageWrapper>
                    <p>
                        К сожалению, вы зашли с неправильной ссылки без utm
                        меток.
                    </p>
                    <p>
                        Для проверки задания перейдите, пожалуйста, по ссылке
                        ниже, либо по ссылке из набора ссылок в{" "}
                        <a href="#">документации</a>.
                    </p>
                    <a href="http://localhost:3000/?utm_source=qwerty-123&utm_campaign=qwerty">
                        http://localhost:3000/?utm_source=qwerty-123&utm_campaign=qwerty
                    </a>
                    <p>Приятной проверки!</p>
                    <RedLeaf1Svg />
                </WrongPageWrapper>
            )}
        </>
    );
};
