import RoomCard from "./components/RoomCard";

function App() {
  return (
    <div>
      <h1>Study Rooms</h1>

      <RoomCard
        name="Study Room A"
        building="Block A"
        status="Available"
      />

      <RoomCard
        name="Study Room B"
        building="Block B"
        status="Booked"
      />

      <RoomCard
        name="Study Room C"
        building="Library"
        status="Available"
      />
    </div>
  );
}

export default App;
``