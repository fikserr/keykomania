import Logo from "../components/ui/logo"

function Stream() {
  return (
    <div>
    <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px]">
      <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
      <div className="relative z-10 w-full pt-[29px] md:pt-[34px] lg:pt-9">
            <Logo className="font-Stray font-bold text-white text-[60px] leading-[72px]" icon="fill-white size-2 md:size-5"/>
            <div className="container">
                  

            </div>
      </div>
    </div>
  </div>
  )
}

export default Stream