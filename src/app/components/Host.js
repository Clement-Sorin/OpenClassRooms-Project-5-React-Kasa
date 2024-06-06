function Host({accomodation}) {
    const fullName = accomodation.host.name
    const slicedName = fullName.split(' ')

    return<div className="host">
        <ul className="host__name">
            {slicedName.map(name =>
                <li key={name}>{name}</li>
            )}
        </ul>
        <img className="host__picture" src={accomodation.host.picture} alt={`profile of ${accomodation.host}`} />
    </div>
}

export default Host