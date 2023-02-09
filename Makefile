foobar:
	meltano run tap-csv target-duckdb
	meltano run tap-oura
	meltano run tap-oura target-duckdb
	git config user.name "Automated"
	git config user.email "actions@users.noreply.github.com"
	git add output/my.duckdb
	git commit -m 'adding all new files'
	git push

evidence-build:
	cd analyze && npm update
	cp output/my.duckdb analyze
	cd analyze && npm run build
        
