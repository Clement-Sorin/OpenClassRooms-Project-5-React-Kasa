function Tag({ tags }) {
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li key={tag} className="tags__element">
                    {tag}
                </li>
            ))}
        </ul>
    )
}

export default Tag
