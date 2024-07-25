import { skills, education, experience } from "../data/datas";

export default function Home() {
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Skills
        </h1>
      </div>

      <div className="w-full flex flex-wrap  px-7 gap-x-10 mb-[40px]">
        <div className="gap-x-6 gap-y-6 flex w-[400px] flex-row flex-grow flex-shrink basis-auto flex-wrap items-center justify-center">
          {skills.map((x) => (
            <li
              key={x.id}
              className="list-none justify-center items-center flex flex-col"
            >
              <div className="flex flex-col bg-slate-200 rounded-full h-[90px] w-[90px] items-center justify-center">
                <div className="h-[60px] w-[60px] flex items-center justify-center flex-row bg-gray">
                  <img
                    src={x.link}
                    alt="im"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="custom-gray-color text-[0.9rem] leading-[1.5] text-left">
                  {x.name}
                </p>
              </div>
            </li>
          ))}
        </div>
        <div className="flex gap-y-9 flex-col ">
          <div className="px-7 py-4">
            <h1 className="flex items-center gap-x-2 text-lg font-medium">
              <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
              Experiences
            </h1>
          </div>
          {experience.map((x) => (
            <li key={x.id} className="list-none">
              <p className="text-blue-700">{x.year}</p>
              <p className="custom-gray-color text-[0.9rem] leading-[1.5] text-left">
                {x.name}
              </p>
              <p className="custom-gray-color text-[0.9rem] leading-[1.5] text-left">
                {x.branch}
              </p>
            </li>
          ))}
        </div>
        <div className="flex gap-y-9 flex-col ">
          <div className="px-7 py-4">
            <h1 className="flex items-center gap-x-2 text-lg font-medium">
              <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
              Education
            </h1>
          </div>

          {education.map((x) => (
            <li key={x.id} className="list-none">
              <p className="text-blue-700">{x.year}</p>
              <p className="custom-gray-color text-[0.9rem] leading-[1.5] text-left">
                {x.name}
              </p>
              <p className="custom-gray-color text-[0.9rem] leading-[1.5] text-left">
                {x.board}
              </p>
              <p className="custom-gray-color text-[0.9rem] leading-[1.5] text-left">
                {x.branch}
              </p>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
