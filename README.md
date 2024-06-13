![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

# Kasa - Real estate renting app

<img src="./src/assets/kasa_screenshot.png" alt="kasa homepage screenshot" width="800" />

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
    <summary>kasa_main</summary>
    <details>
        <summary>public</summary>
        - index.html</br>
        - robots.txt
    </details>
    <details>
        <summary>src</summary>
        <details>
            <summary>app</summary>
            <details>
                <summary>components</summary>
                - Banner.jsx</br>
                - Card.jsx</br>
                - Collapse.jsx</br>
                - Footer.jsx</br>
                - Header.jsx</br>
                - Host.jsx</br>
                - Rating.jsx</br>
                - Slideshow.jsx</br>
                - Tag.jsx
            </details>
            <details>
                <summary>layout</summary>
                - Default.jsx
            </details>
            <details>
                <summary>pages</summary>
                - About.jsx</br>
                - Accomodation.jsx</br>
                - Error404.jsx</br>
                - Home.jsx
            </details>
            - Routes.jsx : page router
        </details>
        <details>
            <summary>assets</summary>
            - arrow_back_ios-24px 2.png</br>
            - coast-background.webp</br>
            - lake_mountain.webp</br>
            - logo-orange.png</br>
            - logo-white.png
        </details>
        <details>
            <summary>css</summary>
            - style.css</br>
            - style.css.map
        </details>
        <details>
            <summary>datas</summary>
            - about-content.json</br>
            - accomodation.json
        </details>
        <details>
            <summary>sass</summary>
            <details>
                <summary>base</summary>
                - _base.scss</br>
                - _variables.scss
            </details>
            <details>
                <summary>components</summary>
                - Banner.scss</br>
                - Card.scss</br>
                - Collapse.scss</br>
                - Footer.scss</br>
                - Header.scss</br>
                - Host.scss</br>
                - Rating.scss</br>
                - Slideshow.scss</br>
                - Tag.scss
            </details>
            <details>
                <summary>layout</summary>
                - Default.scss
            </details>
            <details>
                <summary>pages</summary>
                - About.scss</br>
                - Accomodation.scss</br>
                - Error404.scss</br>
                - Home.scss
            </details>
            - main.scss
        </details>
        - index.jsx : main root file
    </details>
    - package.json</br>
    - package-lock.json</br>
    - gitignore
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
