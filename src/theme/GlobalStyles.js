import { createGlobalStyle } from 'styled-components';
import { BackgroundColor } from 'styled-icons/foundation';

export default createGlobalStyle`
    body {
        color: ${(props) => props.theme.text};
        font-family: ${(props) => props.theme.font};
    }

    .page__wrapper{
        background-color: ${(props) => props.theme.body};
    }

    .details__name {
        color: ${(props) => props.theme.cardTitle};
    }

    .details__position {
        color: ${(props) => props.theme.subText};
    }

    .details__contact {
        color: ${(props) => props.theme.cardTitle};
    }

    .intro__bio {
        color: ${(props) => props.theme.subText};
    }

    .socials__title {
        color: ${(props) => props.theme.cardTitle};
    }

    .toggle {
        height: 50px;
        border-radius: 30px;
        width: 90px;
        background-color: ${(props) => props.theme.subText}};
        transition: all 0.3s ease;

        .toggle__btn {
            background-color: ${(props) => props.theme.cardBg};
            position: absolute;
            top: 30%;
            left: 36%;
            transform: translateX(-50%);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .active {
            background-color: #60A5FA;

            .toggle__btn {
                left: 47%;
                transition: all 0.3s ease;
            }
    
        }
    }

    .btn__icon {
        color: ${(props) => props.theme.subText};
        position: absolute;
        top: 20%;
        left: 48%;
        transform: translateX(-50%);
    }

    .skills__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .item__name {
        color: ${(props) => props.theme.cardTitle1};
    }

    .portfolio__category {
        color: ${(props) => props.theme.offGray};
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
        color: ${(props) => props.theme.cardTitle1};
    }

    .hobbie__text {
        color: ${(props) => props.theme.subText};
    }

    .certificates__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .certificate__title {
        color: ${(props) => props.theme.cardTitle1};
    }

    .certificate__date {
        color: ${(props) => props.theme.subText};
    }

    .certificate__title {
        color: ${(props) => props.theme.cardTitle1};
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

`