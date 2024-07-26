function Sidebarcard() {
	const sortedUsers = [
		{
			img: "https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg",
			name: "Marie Zulfikar",
			lastmessage: "The video chat ended · 2hrs",
		},
		{
			img: "https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg",
			name: "Nhu Cassel",
			lastmessage: "Hello Lauren 👋, · 24 Mar",
		},
		{
			img: "https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg",
			name: "Patrick Friedman",
			lastmessage: "Yes, you’re right but… · 14 Mar",
		},
		{
			img: "https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg",
			name: "Byrne McKenzie",
			lastmessage: "Hey Lauren ✨, first of all… · 14 Mar",
		},
		{
			img: "https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg",
			name: "Scott Micheal",
			lastmessage: "No way 🤙! · 11 Mar",
		},
	];

	return (
		// <!-- Snippet -->
		<section className="flex min-h-screen flex-col justify-center bg-gray-50 p-4 text-gray-600 antialiased">
			<div className="h-full">
				{/* <!-- Card --> */}
				<div className="relative mx-auto max-w-[340px] rounded-lg bg-white shadow-lg">
					{/* <!-- Card header --> */}
					<header className="px-5 pb-4 pt-6">
						<div className="mb-3 flex items-center justify-between">
							{/* <!-- Image + name --> */}
							<div className="flex items-center">
								<a className="mr-3 inline-flex items-start" href="#0">
									<img
										className="rounded-full"
										src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg"
										width="48"
										height="48"
										alt="Lauren Marsano"
									/>
								</a>
								<div className="pr-1">
									<a
										className="inline-flex text-gray-800 hover:text-gray-900"
										href="#0"
									>
										<h2 className="text-xl font-bold leading-snug">
											Lauren Marsano
										</h2>
									</a>
									<br />
									<span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-blue-800">
										<span className="inline-block size-1.5 rounded-full bg-green-800"></span>
										Online
									</span>
								</div>
							</div>
							{/* <!-- Settings button --> */}
							<div className="relative inline-flex flex-shrink-0">
								<button className="rounded-full text-gray-400 outline-none hover:text-gray-500 focus:outline-none focus:ring-0">
									<span className="sr-only">Settings</span>
									<svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
										<path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
									</svg>
								</button>
							</div>
						</div>
						<div className="mx-auto max-w-md">
							<div className="relative flex h-10 w-full items-center overflow-hidden rounded-xl bg-gray-100 focus-within:shadow-lg">
								<div className="grid h-full w-12 place-items-center text-gray-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</div>
								<input
									className="h-full w-full bg-gray-100 pr-2 text-sm text-gray-700 outline-none"
									type="text"
									id="search"
									placeholder="Search user.."
								/>
							</div>
						</div>
					</header>
					{/* <!-- Card body --> */}
					<div className="px-5 py-3">
						<h3 className="mb-1 text-xs font-semibold uppercase text-gray-400">
							Chats
						</h3>
						{/* <!-- Chat list --> */}
						<div className="divide-y divide-gray-200">
							{/* <!-- User --> */}
							{sortedUsers.map((user, index) => (
								<button
									key={index}
									className="w-full py-2 text-left focus:outline-none focus-visible:bg-indigo-50"
								>
									<div className="flex items-center">
										<img
											className="mr-3 flex-shrink-0 items-start rounded-full"
											src={user.img}
											width="32"
											height="32"
											alt="Marie Zulfikar"
										/>
										<div>
											<h4 className="text-sm font-semibold text-gray-900">
												{user.name}
											</h4>
											<div className="text-[13px]">{user.lastmessage}</div>
										</div>
									</div>
								</button>
							))}
						</div>
						{/* <!-- Bottom right button --> */}
						<button className="absolute bottom-5 right-5 inline-flex items-center rounded-full bg-indigo-500 px-3 py-2 text-center text-sm font-medium text-white shadow-lg hover:bg-indigo-600 focus:outline-none focus-visible:ring-2">
							<svg
								className="mr-2 h-3 w-3 flex-shrink-0 fill-current text-indigo-300"
								viewBox="0 0 12 12"
							>
								<path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
							</svg>
							<span>New Chat</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sidebarcard;
