export const CardTechnology = ({title, description, background}) => {
    return(
            <div className={background}>
                <div className="title-description-card">
                    <h2 className="title-card">{title}</h2>
                    <p className="description-card">{description}</p>
                </div>
                <div className="card-button">
                    <button className="btn-card">Explore</button>
                </div>
            </div>
    )
}