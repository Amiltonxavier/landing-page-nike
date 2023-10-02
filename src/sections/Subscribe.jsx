import { Button } from "../components/Button"

export function Subscribe () {
  return (
    <section className="max-w-[1440px] flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Inscreva-se para receber<span className="text-sky-600"> atualizações </span> & boletins informativos</h3>
          <div className="lg:max-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
            <input type="text" name="" id="" className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full" placeholder="exemplo@nike.com" />
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
              <Button label="Inscreva-se" fullWidth />
            </div>
          </div>
    </section>
  )
}
