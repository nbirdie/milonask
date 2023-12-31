import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
`;
const moveAndRotate = keyframes`
    0% {
        top: 0;
        left: 0;
        transform: rotate(0) translateX(0);
    }
    25% {
        top: 0;
        left: 100%;
        transform-origin: 0 0;
        transform: translateX(-60%) rotate(21.1deg);
    }
    50% {
        top: 0;
        left: 0;
        transform: rotate(0) translateX(0);
    }
    100% {
        top: 0;
        left: 0;
        transform: rotate(0) translateX(0);
    }
`;
const lineOpacity = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0.7;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;
export const HandMoveWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    top: 520px;
    width: 900px;
    padding-top: 100px;
    gap: 79px;
    transform: translateX(-50%);
    z-index: 100;
    opacity: 1;
    touch-action: manipulation;
    visibility: ${(props) => (props.isvisible ? 'visible' : 'hidden')};
    animation: ${(props) => (!props.isvisible ? fadeOut : '')};
    .hand-icon {
        width: 245px;
        height: 100px;
        position: relative;
    }
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 82.33px;
        height: 99.24px;
        animation: ${moveAndRotate} 4s ease-out 0.1s infinite;
    }
    hr {
        position: absolute;
        left: 50%;
        top: 2.47px;
        transform: translate(-50%, -50%);
        width: 41px;
        border-top: 2px solid ${({ theme }) => theme.colors.white};
        opacity: 0;
        animation: ${lineOpacity} 4s ease-out 0.1s infinite;
    }
    span {
        display: block;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.text.fontSize.fs1}px;
        line-height: ${({ theme }) => theme.text.lineHeight.big}px;
        font-weight: ${({ theme }) => theme.text.fontWeight.bold};
    }
    @media (max-width: 1919px) {
        top: 518px;
        gap: 164px;
        width: 650px;
        padding-top: 100px;
        .hand-icon {
            width: 201px;
            height: 82px;
            svg {
                width: 67.55px;
                height: 81.38px;
            }
        }
        span {
            width: 325px;
            height: 71px;
            font-size: ${({ theme }) => theme.text.fontSize.fs2}px;
            line-height: ${({ theme }) => theme.text.lineHeight.bigMedium}px;
        }
    }
    @media (max-width: 767px) {
        top: 314px;
        gap: 45px;
        width: 300px;
        padding-top: 50px;
        .hand-icon {
            width: 96px;
            height: 39px;
            svg {
                width: 32.26px;
                height: 38.71px;
            }
        }
        span {
            width: 155px;
            height: 34px;
            font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
            line-height: ${({ theme }) => theme.text.lineHeight.mediumBig}px;
        }
    }
    @media (max-width: 767px) and (height >= 630px) {
        top: 314px;
        gap: 45px;
        width: 300px;
        padding-top: 50px;
        .hand-icon {
            width: 96px;
            height: 39px;
            svg {
                width: 32.26px;
                height: 38.71px;
            }
        }
        span {
            width: 155px;
            height: 34px;
            font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
            line-height: ${({ theme }) => theme.text.lineHeight.mediumBig}px;
        }
    }
    @media (max-width: 767px) and (height < 630px) {
        top: 301px;
        gap: 63px;
        width: 300px;
        padding-top: 50px;
        .hand-icon {
            width: 96px;
            height: 39px;
            svg {
                width: 32.26px;
                height: 38.71px;
            }
        }
        span {
            width: 155px;
            height: 34px;
            font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
            line-height: ${({ theme }) => theme.text.lineHeight.mediumBig}px;
        }
    }
`;
export const AudioElement = styled.audio`
    display: none;
`;
