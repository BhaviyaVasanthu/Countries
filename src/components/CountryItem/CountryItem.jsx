import './CountryItem.css';

export default function CountryItem({ title, region, flag }) {
    return (
        <div className="countryItem_container">
            <img src={flag} alt="" />
            <div className="countryItem_meta">
                <h3>{title}</h3>
                <p>{region}</p>
            </div>
        </div>
    )
}