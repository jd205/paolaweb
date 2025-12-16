import svgPaths from "./svg-c13c9v5by7";

function Layer() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.13%] top-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="Layer 1">
          <path d={svgPaths.p2abd6f80} fill="var(--fill-0, #2DB674)" id="Vector" />
          <path d={svgPaths.p23da3d00} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.13%] top-0" data-name="Layer 2">
      <Layer />
    </div>
  );
}

export default function Check() {
  return (
    <div className="relative size-full" data-name="check_15526397 1">
      <Layer1 />
    </div>
  );
}