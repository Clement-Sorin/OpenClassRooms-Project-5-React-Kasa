function Banner({ background_img, title, titleMobile, alt }) {
    return (
        <section className="banner">
            <img
                src={background_img}
                className="banner__background"
                alt={alt}
            />
            <h1 className="banner__title --desktop">{title}</h1>
            <h1 className="banner__title --mobile">{titleMobile}</h1>
        </section>
    )
}

export default Banner
