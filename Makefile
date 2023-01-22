foobar:
  meltano run tap-csv target-duckdb
  git config user.name "Automated"
  git config user.email "actions@users.noreply.github.com"
  git add output/my.duckdb
  git commit -m 'adding all new files'
  git push

        
