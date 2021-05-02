install: 
	npm ci
 
publish: 
	npm publish --dry-run

lint:
	npx eslint .

jest:
	npx --node-arg --experimental-vm-modules jest

tests:
	npm test -- --coverage --coverageProvider=v8	
