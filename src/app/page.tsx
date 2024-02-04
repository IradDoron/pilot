export default function Home() {
	return (
		<main>
			<h1>Drubakuna</h1>
			<div>
				<h2>Nutrition</h2>
				<section>
					<h3>Drinking water</h3>
					<p>
						<span>How to drink water:</span> take a glass, fill it with cold
						water from the water bar device, and drink it.
					</p>
					<p>
						<span>When to drink water:</span> Drink water at the following
						scenarios:
					</p>
					<ul>
						<li>When you feel thirsty</li>
					</ul>
					<p>Notes:</p>
					<ul>
						<li>
							Use only one glass. If you need more water, refill the glass.
						</li>
					</ul>
				</section>
			</div>
			<div>
				<h2>Organization</h2>
				<section>
					<h3>Cleaning dishes</h3>
					<p>
						<span>How to clean dishes:</span> take a dirty dish, put it under
						the sink and clean it with water and soap. Then, rinse it with water
						and put it in the dish rack. When the dish rack is full, dry the
						dishes and put them in thier respective places. If there are dry
						dishes in the dish rack, put them in thier respective places.
					</p>
					<p>
						<span>When to clean dishes:</span> Clean dishes at the following
						scenarios:
					</p>
					<ul>
						<li>When you finish eating</li>
						<li>When you finish cooking</li>
					</ul>
					<p>Notes:</p>
					<ul>
						<li>
							If you finished cooking and you need to eat, clean the dishes
							after you finish eating. If it possible, clean as much dishes as
							you can before you start eating. Good and warm meal is more
							importent than cleaning the dishes right away.
						</li>
						<li>
							At the moment you finished eating, clean the dishes right away. If
							you are not able to clean the dishes right away, put them in the
							sink.
						</li>
					</ul>
				</section>
			</div>
			<div>
				<h2>Music</h2>
				<section>
					<h3>Working with David</h3>
					<p>
						<span>How to work with David:</span> Define goals, define plans, and
						define tasks. Then, work on the tasks and achieve the goals.
					</p>
					<h4>Goals:</h4>
					<ul>
						<li>Earn money from gigs</li>
					</ul>
					<h4>Plans:</h4>
					<ul>
						<li>Learn to play Mizrahit music</li>
						<li>Learn neccesery repertuar</li>
						<li>Practice gigs materials</li>
						<li>Find gigs</li>
					</ul>
					<h4>Tasks:</h4>
					<ol>
						<li>
							<label>
								<input
									type='checkbox'
									checked={false}
								/>
								Learn to play Mizrahit music
							</label>
						</li>
						<li>
							<label>
								<input
									type='checkbox'
									checked={false}
								/>
								Organize the computer for David
							</label>
							<ul>
								<li>
									<label>
										<input
											type='checkbox'
											checked={false}
										/>
										Install all native instruments software
									</label>
								</li>
								<li>
									<label>
										<input
											type='checkbox'
											checked={false}
										/>
										Install Cubase 13
									</label>
								</li>
								<li>
									<label>
										<input
											type='checkbox'
											checked={false}
										/>
										Install Premiere Pro
									</label>
								</li>
								<li>
									<label>
										<input
											type='checkbox'
											checked={false}
										/>
										Clean all unnecessary files and software
									</label>
								</li>
							</ul>
						</li>
					</ol>
				</section>
			</div>
		</main>
	);
}
