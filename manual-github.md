<h5>Update: 3. July. 2022</h5>

## ==GitHub Command Examples==

#### 1. Tools

1. _Gitbash = MINGW64 Terminal_ : Git default console
2. _sourcetree_: GUI-based git management
3. _VisualStudioCode_: Text editor

#### 2. git shell commands

: Refer to [git documents](https://git-scm.com/docs)

##### " On MINGW64 Terminal in Windows "

-   `git config --list` open global configuration file at ==_c:/Users/your-account-id/.gitconfig_==
-   `git config --global -e` open global configuration file on editing mode
-   `code .` open visual studio code editor
-   `git config --global core.editor "code"`
-   `git config --global -e` open global configuration file by visual studio code
-   `git config --global user.name "your-name"`
-   `git config --global user.email "your-email@email"`
-   `git config user.name` return your name
-   `git config user.email` return your email
-   `git config --global core.autocrlf true"` for window users, set automate crlf management between _local-machine <~> github-server_

##### " git install and checking "

-   `mkdir WorkingProjects`
-   `cd WorkingProjects`
-   `mkdir git`
-   `cd git`
-   `git init`
-   `ls -a`
-   `cd .git`
-   `ls`
-   `cd ..`
-   `git status`
-   `git config --global alias.st status`
-   `git st`
-   `git status --h`

##### " file creation and tracking "

1. Working directory
    - Untracked files : Before "git add"
    - Tracked files : After "git add"
2. Staging area : Before "git commit"
3. .git directory : Committed
4. Remote server : `git push` or `git pull`

-   `echo hello world > a.txt`
-   `echo hello world > b.txt`
-   `echo hello world > c.txt`
-   `git status`
-   `git add a.txt`
-   `git status`
-   `git add *.txt`
-   `git status`
-   `echo Sam > a.txt`
-   `git status`
-   `git rm --cached *`
-   `git status`
-   `ls`
-   `git add *`
-   `git status`
-   `rm a.txt`
-   `git status`
-   `git add .`
-   `git status`
-   `echo styling >> style.css`
-   `echo log > log.log`
-   `git status`
-   `git add *.css`
-   `git status`

5. Save files that will ignore git command to _.gitignore_

-   `echo *.log > .gitignore`
-   `echo *.log > .gitignore`
-   `ls -al`
-   `cat .gitignore`
-   `git status`
-   `nano .gitignore` add \*.log, build/
-   `cat .gitignore`
-   `git ignore --help`
-   `git ignore --h`

-   `git status -s`
-   `echo add > c.txt`
-   `git status -s`
-   `git status`

-   `git diff`
-   `git diff --staged`
-   `git diff -h`
-   `git diff --cached`

-   `git config --config -e`

-   `git commit -m "first commit"`
-   `git log`
-   `echo add >> c.txt`
-   `git commit -am "second commit"`
