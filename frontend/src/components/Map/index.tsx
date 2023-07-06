import GoogleMapReact from "google-map-react";
import mapStyles from "../../utils/map";
const Map = () =>
  //     {
  //   setCoordinates,
  //   setBounds,
  //   coordinates,
  //   places,
  //   setChildClicked,
  //   weatherData,
  // }: {
  //   setCoordinates: (e: any) => void;
  //   setBounds: (e: any) => void;
  //   coordinates: any;
  //   places: any;
  //   setChildClicked: (e: any) => void;
  //   weatherData: any;
  // }
  {
    return (
      <div>
        {/* <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyALELYVGqIuSDVhYwjCJQIULNdpZs-X2-c" }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
            onChange={(e) => {
                console.log(e)
                setCoordinates({ lat: e.center.lat, lng: e.center.lng})
                setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={(child) => setChildClicked(child)}
        ></GoogleMapReact> */}
      </div>
    );
  };

export default Map;
