import { createGlobalStyle } from 'styled-components';

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
        background-color: ${(props) => props.theme.subText};

        .toggle__btn {
            background-color: ${(props) => props.theme.cardBg};
        }
    }

    .btn__icon {
        color: ${(props) => props.theme.subText};
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
        color: ${(props) => props.theme.cardTitle2};
    }

    .card__description {
        color: ${(props) => props.theme.subText};
    }

`