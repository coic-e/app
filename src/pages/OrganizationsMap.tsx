import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { env } from "../config/env";

import "../styles/pages/organizations-map.css";
import mapIcon from "../utils/mapIcon";

interface Organization {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrganizationsMap() {
  // const [organizations, setOrganizations] = useState<Organization[]>([]);
  const organizations: Organization[] = [
    {
      id: 1,
      latitude: -13.702797,
      longitude: -50.6865109,
      name: "Teste",
    },
    {
      id: 2,
      latitude: -13.702797,

      longitude: -50.6865109,
      name: "Teste",
    },
  ];

  // useEffect(() => {
  //   api.get("organizations").then((response) => {
  //     const organizations = response.data;

  //     if (organizations) {
  //       setOrganizations(organizations);
  //     }
  //   });
  // }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <h2>Coletivos de música eletrônica no Brasil</h2>
          <p>Você sabia que são mais de 260 atores que compõem nosso cenário?</p>
        </header>
      </aside>

      <MapContainer
        center={[-13.702797, -50.6865109]}
        zoom={5.1}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${env.VITE_USERNAME}/${env.VITE_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${env.VITE_ACCESS_TOKEN}`}
        />
        {organizations.map((organization) => {
          return (
            <Marker
              icon={mapIcon}
              position={[organization.latitude, organization.longitude]}
              key={organization.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {organization.name}
                <Link to={`/raves/${organization.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <Link to="/raves/create" className="create-organization">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrganizationsMap;
