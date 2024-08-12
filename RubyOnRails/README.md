<h6>ver. Sep-2022.</h6>

<h2>Ruby on Rails </h2>

---

<h4>Development Environment Set-up (Windows 10)</h4>

1. Install node js: https://nodejs.org/en/download/
2. Install yarn: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

```sh
npm install --global yarn

```

3. Install sqlite: https://www.sqlite.org/download.html
    - Download and extract command-line tools
    - Create a folder for sqlite3 ("c:\\sqlite3")
    - Add the folder to path (Settings -> Advanced System Settings -> Environment Variables -> Path)
4. Install ruby: https://www.ruby-lang.org/en/downloads/
5. Install gem

```sh
# installed by ruby installation process
gem update --system

```

6. Install rails

```sh
gem install rails
gem install sqlite3

# verify installation
ruby --version
sqlite3 --version
node --version
yarn --version
gem --version
rails --version

```

7. Create new project
    - Create a folder to install a prject and go to the folder

```sh
rails new project-name
cd project-name
rails server

# open visual-studio-code and edit ruby codes
code

```

8. Open a web-browser and goto "localhost:3000"

---
