function Error404() {
    return <div className="main-wrap">
        <h1 className="main-wrap__title1">404</h1>
        <h2 className="main-wrap__title2">Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/" aria-label="retour à la page d'accueil" className="main-wrap__link">Retourner sur la page d'accueil</a>
    </div>
}

export default Error404