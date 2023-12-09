export default function SliderTemplate() {
  return (
    <>
      <div className="flex flex-1 justify-center flex-col gap-6">
        <div className="flex justify-center">
          <span className="text-5xl leading-10 text-end">
            Теперь вы можете не <br />
            копать грядки
          </span>
        </div>
        <div className="flex">
          <div className="px-10 py-1 bg-catalog_button rounded-full ml-20">
            КАТАЛОГ
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="inline-flex">
          <div className="p-6 font-slide flex flex-col italic font-bold text-white bg-green-700 rounded-l-lg">
            <span className="text-5xl">90%</span>
            <span className="text-lg">cкидка</span>
          </div>
          <div className="px-4 py-6 bg-white rounded-r-lg flex flex-col justify-between">
            <span className="text-lg italic font-bold">ВСЕМ ПЕНСИОНЕРАМ*</span>
            <div>
              <span className="text-xs px-3 py-2 bg-main_green rounded-xl">
                УЗНАТЬ БОЛЬШЕ
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
