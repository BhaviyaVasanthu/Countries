import { useEffect, useRef } from "react";
import { useState } from "react";
import CountryItem from "../../components/CountryItem/CountryItem";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import SocialBox from "../../components/SocailBox/SocialBox";
import "./HomePage.css";

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [hideMenu, setHideMenu] = useState(true)
  const allCountries = useRef([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      );
      const data = await response.json();
      allCountries.current = data;
      setCountries(data);
    })();
  }, []);

  const handleOnMenuClick = () => {
    setHideMenu(!hideMenu)
}

  const handleRegionItemClick = (name) => {
    if (name === "All") {
      setCountries(allCountries.current);
      return;
    }
    setCountries(allCountries.current.filter((item) => item.region === name));
  };
  return (
    <div className="homepage_container">
      <header>
      <h2>Countries</h2>
                <img src="./menu_icon.png" className="btnMenuIcon" onClick={handleOnMenuClick}/>
                <div className={hideMenu ? 'menu-list' : 'menu-list show'}>
                    <ul>
                        <li onClick={() => handleRegionItemClick("All")}>All</li>
                        <li onClick={() => handleRegionItemClick("Asia")}>Asia</li>
                        <li onClick={() => handleRegionItemClick("Europe")}>Europe</li>
                    </ul>
                </div>
      </header>
      <section>
        <div className="countryFlagList">
          {countries.map((country, i) => (
            <CountryItem
              key={i}
              title={country.name}
              region={country.region}
              flag={country.flag}
            />
          ))}
        </div>
        <br />
        <br />
        <br />
        <div className="homefooter">
          <SocialBox />
        </div>
        <HomeFooter />
      </section>
    </div>
  );
}
