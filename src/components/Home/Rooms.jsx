import Room from "./Room";

export default function Rooms() {
  return (
    <div className=" rooms container">
      <div className="title">
        <h3>
          Rooms
        </h3>
        <p>
          Pick one and begin your adventure
        </p>
      </div>

      <div className="rooms-container">
        <Room />
      </div>

    </div>
  )
}

