export default function Home() {
  return (
    <>
      <main className="w-screen h-screen flex justify-between flex-col items-center">

        {/* titulo */}
        <header className="flex flex-col items-center gap-2">
          <h1 className='text-5xl my-shadow mt-3 pl-8 pr-8 pt-8'>Web Rádio</h1>
          <h2 className="text-3xl my-shadow mb-3">o Evangelho de Cristo</h2>
        </header>

        {/* player */}
        <div className="w-11/12  sm:w-4/5 bg-amber-300 h-20 rounded-full flex justify-start items-center mx-4 my-20 p-4">
          <audio controls style={{ width: '100%' }}>
            <source src="https://stream-151.zeno.fm/wt4au44de2zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ3dDRhdTQ0ZGUyenV2IiwiaG9zdCI6InN0cmVhbS0xNTEuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkVITGtGUTlnUnU2ejNpM29pU050dHciLCJpYXQiOjE3MTg2NDc0NjUsImV4cCI6MTcxODY0NzUyNX0.PMljF5Q9nPlK39cryTpRTHBHWsDBPpdVr02yEg5ZujQ" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* versículo + imagem */}
        <div className="flex flex-col items-center mb-4">
          <p className='max-w-sm text-lg text-center px-2 pb-6'>Rm 8:1: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus."</p>
          <img
            src="/img-bible.png"
            alt="bíblia - imagem"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      </main>
  </>
  );
}
