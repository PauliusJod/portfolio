import { useOverviewContext } from "../hooks/useOverviewContext";

interface Props {
  record: {
    title: string;
    description: string;
    date: string;
    tags: string[];
  };
  index: number;
}

function ExpComponent({ record, index }: Props): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <>
      <div
        key={index}
        className={`w-[800px] my-2 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-gray-800 border rounded-md border-[#00000024] dark:border-[#00000034] shadow-borders ${
          overviewValue === "ExpComponent.tsx" ? "shadow-borders-overview" : ""
        }`}>
        <div className='grid grid-cols-3 gap-1'>
          <div className='flex items-center justify-center text-slate-900 dark:text-slate-200 text-sm'>
            {record.date}
          </div>
          <div className='col-span-2'>
            <div className='font-bold py-2 text-slate-900 dark:text-slate-100 text-lg'>{record.title}</div>
            <div className='pb-2 text-slate-900 dark:text-slate-200 mx-3 text-sm'>{record.description}</div>
            <div className='flex w-full text-slate-200 text-xs overflow-x-auto items-center custom-scrollbar'>
              {record.tags.map((v, i) => {
                var colorRed = Math.random() * 5 * 15;
                var colorBlue = Math.random() * 10 * 22;
                return (
                  <div
                    key={i}
                    className='mx-2 my-2 px-3 py-1 rounded-md dark:experience-shadow-borders'
                    style={{
                      backgroundColor: `rgba(${colorRed}, 100, ${colorBlue}, 0.6)`,
                    }}>
                    <p className='whitespace-nowrap text-sm'>{v}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpComponent;
