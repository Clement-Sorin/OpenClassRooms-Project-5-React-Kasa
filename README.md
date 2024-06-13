![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

# Kasa - Real estate renting app

<img src="./src/assets/kasa_screenshot.png" alt="kasa homepage screenshot" width="500" />

## Description

Fifth project of the OpenClassrooms Web Developer course

## Technologies

-   React
-   SCSS

## Libraries

-   Create-React-App
-   React-Router-Dom

## Code Architecture

<details>
    <summary>Kasa</summary>
    <details>
        <summary>public</summary>
        - **index.html**
        - **robots.txt**
    </details>
    <details>
        <summary>src</summary>
        <details>
            <summary>app</summary>
            <details>
                <summary>components</summary>
                - **Banner.jsx**
                - **Card.jsx**
                - **Collapse.jsx**
                - **Footer.jsx**
                - **Header.jsx**
                - **Host.jsx**
                - **Rating.jsx**
                - **Slideshow.jsx**
                - **Tag.jsx**
            </details>
            <details>
                <summary>layout</summary>
                - **Default.jsx**
            </details>
            <details>
                <summary>pages</summary>
                - **About.jsx**
                - **Accomodation.jsx**
                - **Error404.jsx**
                - **Home.jsx**
            </details>
            - **Routes.jsx** : page router
        </details>
        <details>
            <summary>assets</summary>
            - **arrow_back_ios-24px 2.png**
            - **coast-background.webp**
            - **lake_mountain.webp**
            - **logo-orange.png**
            - **logo-white.png**
        </details>
        <details>
            <summary>css</summary>
            - **style.css**
            - **style.css.map**
        </details>
        <details>
            <summary>datas</summary>
            - **about-content.json**
            - **accomodation.json**
        </details>
        <details>
            <summary>sass</summary>
            <details>
                <summary>base</summary>
                - **_base.scss**
                - **_variables.scss**
            </details>
            <details>
                <summary>components</summary>
                - **Banner.scss**
                - **Card.scss**
                - **Collapse.scss**
                - **Footer.scss**
                - **Header.scss**
                - **Host.scss**
                - **Rating.scss**
                - **Slideshow.scss**
                - **Tag.scss**
            </details>
            <details>
                <summary>layout</summary>
                - **Default.scss**
            </details>
            <details>
                <summary>pages</summary>
                - **About.scss**
                - **Accomodation.scss**
                - **Error404.scss**
                - **Home.scss**
            </details>
            - **main.scss**
        </details>
        - **index.jsx** : main root file
    </details>
    - **package.json**
    - **package-lock.json**
    - **gitignore**
</details>

## Goal

Starting from scratch, the developer will need to create the entire front-end part of the Kasa website, a real estate rental company.

In this project, it will be necessary to:

1. initialize the application with Create React App
2. Add React Router and create the different pages of the application
3. Create the home page using component logic for displaying the different apartments
4. Create the About page with collapsible dropdown lists
5. Create a page for handling 404 errors
6. Create the individual housing page with a carousel for the images

## Author

Clément Sorin
