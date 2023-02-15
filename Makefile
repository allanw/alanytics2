foobar:
	echo hello
	python3 -c "import duckdb; print(duckdb.__version__)"
	python3 -c "import duckdb; con = duckdb.connect(database='output/my.duckdb'); print(con)"
	git config user.name "Automated"
	git config user.email "actions@users.noreply.github.com"
	git rm -f output/my.duckdb
	git commit -m 'Removing duckdb file'
	meltano run tap-oura target-duckdb
	git add output/my.duckdb
	git commit -m 'adding all new files'
	git push

evidence-build:
	cd analyze && npm update
	cp output/my.duckdb analyze
	cd analyze && npm run build
        
