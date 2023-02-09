foobar:
	meltano invoke tap-duckdb

evidence-build:
	cd analyze && npm update
	cp output/my.duckdb analyze
	cd analyze && npm run build
        
