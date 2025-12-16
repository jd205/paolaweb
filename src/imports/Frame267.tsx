function Group() {
  return (
    <div className="absolute contents inset-[12.5%]">
      <div className="absolute inset-[12.5%_56.47%_56.47%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#612dae] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
      <div className="absolute inset-[56.47%_56.47%_12.5%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#612dae] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
      <div className="absolute inset-[12.5%_12.5%_56.47%_56.47%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#612dae] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
      <div className="absolute inset-[56.47%_12.5%_12.5%_56.47%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#612dae] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Component 188">
            <div className="absolute inset-0" />
            <Group />
          </div>
        </div>
      </div>
    </div>
  );
}