export GIT_COMMITTER_DATE="Tue 21 Aug 2018 20:19:19 BST" git commit --amend --no-edit --date "Tue 21 Aug 2018 20:19:19 BST"
echo "test" > commit.md
git add commit.md -f
git push origin master
git rm -rf 20**
git commit -am "cleanup"
git push origin master
