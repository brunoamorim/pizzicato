describe('Effects.LowPassFilter', function() {

	it('Should override default options', function() {
		var options = {
			frequency: 10,
			peak: 0.6
		};
		var lowPassFilter = new Pizzicato.Effects.LowPassFilter(options);

		expect(lowPassFilter.frequency).toBe(options.frequency);
		expect(lowPassFilter.peak).toBe(lowPassFilter.peak);
	});


	it('Should change the filter node frequency value when changing the frequency', function() {
		var initialFrequency = 400;
		var newFrequency = 600;
		var lowPassFilter = new Pizzicato.Effects.LowPassFilter({ frequency: initialFrequency });

		expect(lowPassFilter.filterNode.frequency.value).toBe(initialFrequency);

		lowPassFilter.frequency = newFrequency;

		expect(lowPassFilter.filterNode.frequency.value).toBe(newFrequency);
	});


	it('Should change the filter node Q value when changing the peak', function() {
		var initialPeak = 5;
		var newPeak = 100;
		var lowPassFilter = new Pizzicato.Effects.LowPassFilter({ peak: initialPeak });

		expect(lowPassFilter.filterNode.Q.value).toBe(initialPeak);

		lowPassFilter.peak = newPeak;

		expect(lowPassFilter.filterNode.Q.value).toBe(newPeak);
	});

});