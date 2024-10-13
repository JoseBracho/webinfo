import { Link } from "react-router-dom"

export const CardTechnology = ({title, description, background, path}) => {
    return(
            <div className={background}>
                <div className="title-description-card">
                    <h2 className="title-card">{title}</h2>
                    <p className="description-card">{description}</p>
                </div>
                <div className="card-button">
                    <button className="btn-card"><Link className="color-card" to={`/industries?activeTab=${path}`}>Explore</Link></button>
                </div>
            </div>
    )
}