echo "test" > commit.md
export GIT_COMMITTER_DATE="2018-12-20 04:00:00"
export GIT_AUTHOR_DATE="2018-12-20 04:00:00"
git add commit.md -f
git commit --date="2018-12-20 00:00:00" -m "test"
git push origin master
git rm -rf 20**
git commit -am "cleanup"
git push origin master
