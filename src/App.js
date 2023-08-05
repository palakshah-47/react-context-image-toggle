import { getImageUrl } from "./utils.js";
import { places } from "./data.js";
import { useImageContext } from "./ImageContext";
import { usePlaceContext, PlaceContextProvider } from "./PlaceContext";
import StaticContent from "./StaticContent";
import { useEffect } from "react";
export default function App() {
  const { isLarge, setIsLarge } = useImageContext();

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </>
  );
}

function List() {
  const listItems = places.map((placeItem) => (
    <li key={placeItem.id}>
      <PlaceContextProvider>
        <Place placeItem={placeItem} />
      </PlaceContextProvider>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ placeItem }) {
  const { setPlace } = usePlaceContext();
  useEffect(() => {
    if (placeItem) setPlace(placeItem);
  }, [placeItem, setPlace]);

  return (
    <>
      <PlaceImage />
      <p>
        <b>{placeItem.name}</b>
        {": " + placeItem.description}
      </p>
      <StaticContent />
    </>
  );
}

function PlaceImage() {
  const { imageSize } = useImageContext();
  const { place } = usePlaceContext();
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
