import profilepicture from "../utils/user.png";
function AboutMePage(): JSX.Element {
  return (
    <div className='flex justify-center items-center p-4'>
      <img
        className='my-2 py-2 rounded'
        width={100}
        src={profilepicture}
        alt='Developer photo'
      />

      <div className='w-1/2'>
        <p className='text-slate-900 dark:text-slate-300 mx-4 text-lg font-bold'>Paulius Jodka</p>
        <p className='text-slate-900 dark:text-slate-300 mx-4 text-md'>
          In 2023, I graduated with a bachelor's degree in computer science from Kaunas University of Technology. At the
          same time, I went deep into in-game script development using Vue and React frameworks as well as Lua.
        </p>
      </div>
    </div>
  );
}
export default AboutMePage;
