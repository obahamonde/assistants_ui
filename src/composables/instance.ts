function decorator() {
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		console.log(target, key, descriptor);
	}
}
