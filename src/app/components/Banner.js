function Banner({background_img, title, alt}) {
    return <section className="banner">
        <img 
            src={background_img} 
            className='banner__background' 
            alt={alt} 
        />
        <h1 
            className="banner__title">
            {title}
        </h1>
    </section>
}

export default Banner