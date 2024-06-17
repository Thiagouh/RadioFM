function Player() {
	return (
		<div className="bg-gray-700 w-1/2 h-20 rounded-full flex justify-start items-center gap-x-2 px-4">
			<div className="rounded-full overflow-hidden">
			<img
				src="/biblia-arredondado.png"
				alt="bíblia - imagem"
				width={80}
				height={80}
				className="rotate"
			/>
			</div>
			<audio id="audioPlayer" controls style={{ width: '100%' }}>
				<source src="https://stream-151.zeno.fm/wt4au44de2zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ3dDRhdTQ0ZGUyenV2IiwiaG9zdCI6InN0cmVhbS0xNTEuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkVITGtGUTlnUnU2ejNpM29pU050dHciLCJpYXQiOjE3MTg2NDc0NjUsImV4cCI6MTcxODY0NzUyNX0.PMljF5Q9nPlK39cryTpRTHBHWsDBPpdVr02yEg5ZujQ" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	)
}

export default Player;
