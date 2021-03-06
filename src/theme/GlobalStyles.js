import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        color: ${(props) => props.theme.text};
        font-family: ${(props) => props.theme.font};
    }

    a,
    a:visited,
    a:hover,
    a:active {
        color: ${(props) => props.theme.text};
        text-decoration: none;
    }

    .page__wrapper{
        background-color: ${(props) => props.theme.body};
        // background: ${(props) => props.theme.gradient};
    }

    .details__name {
        color: ${(props) => props.theme.cardTitle};
    }

    .details__position {
        color: ${(props) => props.theme.primaryBlue};
    }

    .details__contact {
        color: ${(props) => props.theme.cardTitle};
    }

    .intro__bio {
        color: ${(props) => props.theme.subText};
    }

    .intro__icon {
        color: ${(props) => props.theme.cardTitle};
    }

    .mail {
        color: ${(props) => props.theme.primaryBlue};
    }

    .socials__title {
        color: ${(props) => props.theme.cardTitle};
    }

    .toggle__container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
    }

    .toggle {
        position: relative;
        height: 50px;
        width: 90px;
        border-radius: 30px;
        background-color: ${(props) => props.theme.subText}};
        transition: all 0.3s ease;

        .toggle__btn {
            background-color: ${(props) => props.theme.cardBg};
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate(-50%, -50%);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .toggle__text {
            color: ${(props) => props.theme.primaryBlue};
        }

        .active {
            background-color: #60A5FA;
            transition: all 0.9s ease;

            .toggle__btn {
                left: 70%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s ease;
            }
    
        }
    }

    .btn__icon {
        color: ${(props) => props.theme.subText};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .skills__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .item__name {
        color: ${(props) => props.theme.cardTitle1};
    }

    .portfolio__category {
        color: ${(props) => props.theme.primaryBlue};
    }

    .portfolio__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .portfolio__text {
        color: ${(props) => props.theme.subText};
    }

    .hobbies__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .hobbie__title {
        color: ${(props) => props.theme.primaryBlue};
    }

    .hobbie__text {
        color: ${(props) => props.theme.subText};
    }

    .certificates__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .certificate__title {
        color: ${(props) => props.theme.primaryBlue};
    }

    .certificate__date {
        color: ${(props) => props.theme.subText};
    }

    .certificate__description {
        color: ${(props) => props.theme.subText};
    }

    .filter__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .card__tags--item {
        color: ${(props) => props.theme.cardTitle1};
    }

    .card__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .card__description {
        color: ${(props) => props.theme.subText};
    }

    .selected {
        background-color: ${(props) => props.theme.primaryBlue};
        border: 2px solid ${(props) => props.theme.primaryBlue};
        color: ${(props) => props.theme.btnText};
        
    }

    .star__icon {
        color: ${(props) => props.theme.primaryBlue};
    }

    .important__word {
        color: ${(props) => props.theme.primaryBlue};
        b {
            font-weight: 500;
        }
        
    }

    .certificate__title a {
        color: #2F80ED;
    }
`;
