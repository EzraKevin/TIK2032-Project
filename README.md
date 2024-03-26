Daftar tugas / branch
1. Tugas-git
2. Tugas-html
3. Tugas-css
4. Tugasm-js
5. Tugas-midProject
6. Tugas-php
7. Tugas-finalProject

 Daftar perintah GiT

 
User@ecang MINGW64 /c/git
$ git clone https://github.com/EzraKevin/belajarGit.git
Cloning into 'belajarGit'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (6/6), done.

User@ecang MINGW64 /c/git
$ git init
Initialized empty Git repository in C:/git/.git/

User@ecang MINGW64 /c/git (master)
$ cd belajarGIT

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-git

User@ecang MINGW64 /c/git/belajarGIT (main)
$ gitgit checkout Tugas-git
bash: $'\302\233\302\233\302\233git': command not found

User@ecang MINGW64 /c/git/belajarGIT (main)
$ ^C

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-git
Switched to branch 'Tugas-git'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git add Tugas-Git.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Tugas-Git.txt


User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git config --global user.eamail "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git commit -m "tugasgit"
[Tugas-git 6eba15c] tugasgit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-Git.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git add Tugas-Git.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git commit -m "tugasgit"
On branch Tugas-git
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Tugas-Git.txt

no changes added to commit (use "git add" and/or "git commit -a")

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git add Tugas-Git.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   Tugas-Git.txt


User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git commit -m "tugasgit"
[Tugas-git dbe5b48] tugasgit
 1 file changed, 1 insertion(+)

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git status
On branch Tugas-git
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-git)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-git
Updating 11dbfb5..dbe5b48
Fast-forward
 Tugas-Git.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-Git.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 2 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 541 bytes | 77.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/EzraKevin/belajarGit.git
   11dbfb5..dbe5b48  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-html

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-html
Switched to branch 'Tugas-html'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git add Tugas-Html.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git commit -m "tugashtml"
[Tugas-html ae068d3] tugashtml
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-Html.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git status
On branch Tugas-html
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git commit -m "tugashtml"
On branch Tugas-html
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Tugas-Html.txt

no changes added to commit (use "git add" and/or "git commit -a")

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git status
On branch Tugas-html
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Tugas-Html.txt

no changes added to commit (use "git add" and/or "git commit -a")

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git add Tugas-Html.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git add ^C
fatal: pathspec '^C' did not match any files

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git add Tugas-Html.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git commit -m "tugashtml"
[Tugas-html 93b3c5e] tugashtml
 1 file changed, 1 insertion(+)

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git status
On branch Tugas-html
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-html)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-html
Updating dbe5b48..93b3c5e
Fast-forward
 Tugas-Html.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-Html.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 2 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 525 bytes | 262.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/EzraKevin/belajarGit.git
   dbe5b48..93b3c5e  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-css

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-css
Switched to branch 'Tugas-css'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git checkout Tugas-css
Already on 'Tugas-css'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git add Tugas-Css.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git commit -m "tugascss"
[Tugas-css 8371c72] tugascss
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-Css.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$
User@ecang MINGW64 /c/git
$ git clone https://github.com/EzraKevin/belajarGit.git
Cloning into 'belajarGit'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (6/6), done.

User@ecang MINGW64 /c/git
$ git init
Initialized empty Git repository in C:/git/.git/

User@ecang MINGW64 /c/git (master)
$ cd belajarGIT

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-git

User@ecang MINGW64 /c/git/belajarGIT (main)
$ gitgit checkout Tugas-git
bash: $'\302\233\302\233\302\233git': command not found

User@ecang MINGW64 /c/git/belajarGIT (main)
$ ^C

bash: User@ecang: command not found
bash: $: command not found
bash: Cloning: command not found
bash: remote:: command not found
bash: syntax error near unexpected token `('
bash: syntax error near unexpected token `('
bash: syntax error near unexpected token `('
bash: syntax error near unexpected token `('
bash: User@ecang: command not found
bash: $: command not found
bash: Initialized: command not found
bash: syntax error near unexpected token `('
bash: $: command not found
bash: syntax error near unexpected token `('
bash: $: command not found
bash: syntax error near unexpected token `('
bash: $: command not found
bash: bash:: command not found
bash: syntax error near unexpected token `('
bash: $: command not found

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git commit -m "tugascss"
On branch Tugas-css
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git status
On branch Tugas-css
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git checkout Tugas-css
Already on 'Tugas-css'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git add Tugas-Css.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git commit -m "tugascss"
On branch Tugas-css
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git commit -m "tugascss"
On branch Tugas-css
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git add Tugas-Css.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git config --global user.name "EzraKevin"
User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git commit -m "tugascss"
[Tugas-css 009df23] tugascss
 1 file changed, 1 insertion(+), 1 deletion(-)

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git status
On branch Tugas-css
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-css)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-css
Updating 93b3c5e..009df23
Fast-forward
 Tugas-Css.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-Css.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 2 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 548 bytes | 22.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/EzraKevin/belajarGit.git
   93b3c5e..009df23  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-js

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-js
Switched to branch 'Tugas-js'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git add Tugas-Js.txt


User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git commit -m "tugasjs"
[Tugas-js e0dd43a] tugasjs
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-Js.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git status
On branch Tugas-js
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Tugas-Js.txt

no changes added to commit (use "git add" and/or "git commit -a")

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git add Tugas-Js.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git commit -m "tugasjs"
[Tugas-js 91e3cfd] tugasjs
 1 file changed, 1 insertion(+)

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$ git status
On branch Tugas-js
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-js)
$  git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-js
Updating 009df23..91e3cfd
Fast-forward
 Tugas-Js.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-Js.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 2 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 445 bytes | 18.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/EzraKevin/belajarGit.git
   009df23..91e3cfd  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-midProject

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-midProject
Switched to branch 'Tugas-midProject'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-midProject)
$ git add Tugas-MidProject.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-midProject)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-midProject)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-midProject)
$ git commit -m "tugasmidproject"
[Tugas-midProject d45c46f] tugasmidproject
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-MidProject.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-midProject)
$ git status
On branch Tugas-midProject
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-midProject)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-midProject
Updating 91e3cfd..d45c46f
Fast-forward
 Tugas-MidProject.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-MidProject.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 2 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 280 bytes | 140.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/EzraKevin/belajarGit.git
   91e3cfd..d45c46f  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-php

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-php
Switched to branch 'Tugas-php'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-php)
$ git add Tugas-Php.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-php)
$ git config --global user.email "ezraskill01@gmail.com"
User@ecang MINGW64 /c/git/belajarGIT (Tugas-php)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-php)
$ git commit -m "tugasphp"
[Tugas-php bbd1bb3] tugasphp
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-Php.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-php)
$ git status
On branch Tugas-php
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-php)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-php
Updating d45c46f..bbd1bb3
Fast-forward
 Tugas-Php.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-Php.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 2 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 242 bytes | 242.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/EzraKevin/belajarGit.git
   d45c46f..bbd1bb3  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git branch Tugas-finalProject

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git checkout Tugas-finalProject
Switched to branch 'Tugas-finalProject'

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git add Tugas-FinalProject.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git config --global user.email "ezraskill01@gmail.com"
User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git commit -m "tugasfinalproject"
On branch Tugas-finalProject
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tugas-finalProject.txt

nothing added to commit but untracked files present (use "git add" to track)

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git add Tugas-FinalProject.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git config --global user.email "ezraskill01@gmail.com"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git config --global user.name "EzraKevin"
User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git commit -m "tugasfinalproject"
On branch Tugas-finalProject
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tugas-finalProject.txt

nothing added to commit but untracked files present (use "git add" to track)

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git add Tugas-FinalProject.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git config --global user.name "EzraKevin"

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git commit -m "tugasfinalproject"
[Tugas-finalProject 9d895c0] tugasfinalproject
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-FinalProject.txt

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git status
On branch Tugas-finalProject
nothing to commit, working tree clean

User@ecang MINGW64 /c/git/belajarGIT (Tugas-finalProject)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git merge Tugas-finalProject
Updating bbd1bb3..9d895c0
Fast-forward
 Tugas-FinalProject.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-FinalProject.txt

User@ecang MINGW64 /c/git/belajarGIT (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 2 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 250 bytes | 250.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/EzraKevin/belajarGit.git
   bbd1bb3..9d895c0  main -> main

User@ecang MINGW64 /c/git/belajarGIT (main)
$

