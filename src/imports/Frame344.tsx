import svgPaths from "./svg-fxbp72qeiy";

function BoundingBox() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="bounding-box">
        <g id="shape"></g>
      </g>
    </svg>
  );
}

function MoneyBagCopy() {
  return (
    <div className="absolute inset-[14.58%_15.83%_10.42%_23.75%]" data-name="money-bag-copy">
      <div className="absolute inset-[-2.78%_-3.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
          <g id="money-bag-copy">
            <path clipRule="evenodd" d={svgPaths.p1770b200} fillRule="evenodd" id="Combined-Shape" stroke="var(--stroke-0, #612DAE)" />
            <path d={svgPaths.p215f6400} fill="var(--fill-0, #612DAE)" id="tie" />
            <path d={svgPaths.pe631500} fill="var(--fill-0, #612DAE)" id="tie_2" />
            <path d={svgPaths.pd606880} fill="var(--fill-0, #F3F1FD)" id="coin" stroke="var(--stroke-0, #612DAE)" />
            <path d={svgPaths.p16a7680} fill="var(--fill-0, #F3F1FD)" id="coin_2" stroke="var(--stroke-0, #612DAE)" />
            <path d={svgPaths.p2bdda000} fill="var(--fill-0, #F3F1FD)" id="coin_3" stroke="var(--stroke-0, #612DAE)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MoneyBag() {
  return (
    <div className="absolute contents inset-0" data-name="money-bag">
      <BoundingBox />
      <MoneyBagCopy />
    </div>
  );
}

function CotizarOutlineIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="cotizar_outline_icon">
      <MoneyBag />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[5px] size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <CotizarOutlineIcon />
        </div>
      </div>
    </div>
  );
}