import Robot3d from "./components/models3d/Robot3d";

function App() {
  return (
    <div className="h-screen bg-[#1a1a1a] flex justify-center items-center text-white ">
      <div className="flex gap-20 jusitfy-center items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">3D Robot Model</h1>
          <p className="text-xl mb-4">
            This is a 3D model of a robot. You can rotate and zoom in/out using
            the mouse.
          </p>
        </div>
        <div className="animate-bounce">
          <Robot3d />
        </div>
      </div>
    </div>
  );
}

export default App;
