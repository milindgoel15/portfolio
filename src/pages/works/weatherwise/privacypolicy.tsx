const Privacypolicy = () => {
	return (
		<>
			<div className="flex flex-col m-4 md:mx-10 xl:mx-40 xl:py-24 text-base leading-7 font-sans">
				<h1>Privacy Policy</h1>
				<p>
					<strong>Effective Date:</strong> 30 December 2024
				</p>

				<p>
					WeatherWise (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your
					privacy and is committed to protecting your personal information. This Privacy Policy
					outlines how we collect, use, and protect the information you provide when using our
					weather app (WeatherWise).
				</p>

				<h2>1. Information We Collect</h2>
				<h3>1.1 Location Information:</h3>
				<ul>
					<li>
						<strong>ACCESS_COARSE_LOCATION:</strong> To determine approximate location for
						weather updates.
					</li>
					<li>
						<strong>ACCESS_FINE_LOCATION:</strong> To determine precise location for more
						accurate weather forecasts.
					</li>
				</ul>

				<h3>1.2 Device and Network Information:</h3>
				<ul>
					<li>
						<strong>ACCESS_NETWORK_STATE:</strong> To check your network status and provide
						updates when you are connected to the internet.
					</li>
					<li>
						<strong>INTERNET:</strong> To fetch weather data from external servers.
					</li>
				</ul>

				<h3>1.3 App Activity Information:</h3>
				<ul>
					<li>
						<strong>RECEIVE_BOOT_COMPLETED:</strong> To ensure the App starts properly after
						device reboot for services like notifications or background updates.
					</li>
					<li>
						<strong>WAKE_LOCK:</strong> To prevent the device from going to sleep while the
						App performs critical tasks such as updating weather data.
					</li>
					<li>
						<strong>FOREGROUND_SERVICE:</strong> To ensure continuous weather updates in the
						background.
					</li>
				</ul>

				<h2>2. How We Use Your Information</h2>
				<ul>
					<li>Provide accurate and up-to-date weather information based on your location.</li>
					<li>Improve the performance and functionality of the App.</li>
					<li>Ensure seamless background operations and notifications.</li>
					<li>
						Comply with legal obligations or respond to lawful requests from authorities.
					</li>
				</ul>

				<h2>3. Data Sharing</h2>
				<p>
					We do not sell, trade, or rent your personal information to third parties. However,
					we may share your data with:
				</p>
				<ul>
					<li>
						<strong>Service Providers:</strong> Third-party weather data providers for
						real-time updates.
					</li>
					<li>
						<strong>Legal Authorities:</strong> When required by law to comply with legal
						processes or to protect the rights and safety of our users.
					</li>
				</ul>

				<h2>4. Data Security</h2>
				<p>
					We implement industry-standard security measures to protect your information from
					unauthorized access, alteration, or disclosure. However, no method of electronic
					transmission or storage is 100% secure, and we cannot guarantee absolute security.
				</p>

				<h2>5. User Controls and Choices</h2>
				<ul>
					<li>
						<strong>Location Permissions:</strong> You can disable location access in your
						device settings. However, this may limit the App’s ability to provide accurate
						weather updates.
					</li>
					<li>
						<strong>Data Deletion:</strong> If you wish to delete your data or have questions
						about how your information is used, please contact us at [Insert Contact Email].
					</li>
				</ul>

				<h2>6. Third-Party Services</h2>
				<p>
					The App may include links to third-party websites or services. We are not responsible
					for their privacy practices and recommend reviewing their privacy policies.
				</p>

				<h2>7. Changes to This Privacy Policy</h2>
				<p>
					We may update this Privacy Policy from time to time. Changes will be reflected with a
					revised Effective Date. We encourage you to review the Privacy Policy periodically
					for updates.
				</p>

				<h2>8. Contact Us</h2>
				<p>
					If you have any questions about this Privacy Policy, please contact us at:
					WeatherWise
				</p>

				<p>Thank you for trusting WeatherWise!</p>
			</div>
		</>
	);
};

export default Privacypolicy;
