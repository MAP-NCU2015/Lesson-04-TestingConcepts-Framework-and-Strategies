# Testing Concepts, Framework and Strategies

[![Build Status](https://travis-ci.org/MAP-NCU2015/Lesson-04-Testing.svg)](https://travis-ci.org/MAP-NCU2015/Lesson-04-Testing)

Introduction of testing concept, strategies and current used testing framework in Mozilla. Students are expected to learn the importance of unit tests and know how to write good one.

- [Wiki Page](https://wiki.mozilla.org/Firefox_OS/AcademyNCU2015)

by Askeing Yen & Shing Lyu


## Creating your Pull Request

Before you begin, [set up your Git](https://help.github.com/articles/set-up-git/).

### 1. Create your fork and local clone

You have to **fork** this repository, then navigate to your fork repository.

In the right sidebar of **your repository**, copy the `HTTPS clone URL`.

Open terminal. Change folder to your home (or other workspace folder).
```bash
$ cd ~
```

You can create a local clone of your fork. (You can paste the URL you copied before.)
```bash
$ git clone https://github.com/YOUR_ACCOUNT/Lesson-04-Testing.git
```

Now you have a local clone of your fork repository.
```bash
$ cd Lesson-04-Testing
```

### 2. Complete your work on your local clone

Writing your code and tests.

Running `mocha` locally to make sure your tests will pass.

Then you can commit, and push your changes to your fork repository.

(If possible, using `git branch` to manage your changes.)

### 3. Create the Pull Request

Navigate to **your repository**, switch to the branch which has your changes.

Click `Compare, review, create a pull request` button (a green button).

You are presented with a review page.

Type the title (**Your Student ID Number**) and description for your Pull Request.

Click `Create pull request`.

### Reference

For more detail, please see the following articles.

* https://help.github.com/
* https://help.github.com/articles/set-up-git/
* https://help.github.com/articles/fork-a-repo/
* https://help.github.com/articles/managing-branches-in-your-repository/
* https://help.github.com/articles/creating-a-pull-request/
* https://help.github.com/articles/using-pull-requests/


## How to get the latest code from upstream repo

### Add upstream

First of all, add upstream by `git remote` command.

```bash
$ git remote add upstream https://github.com/MAP-NCU2015/Lesson-04-Testing.git
```

Then you can check the remote repo by `-v` option.

```bash
$ git remote -v
upstream	https://github.com/MAP-NCU2015/Lesson-04-Testing.git (fetch)
upstream	https://github.com/MAP-NCU2015/Lesson-04-Testing.git (push)
origin	https://github.com/<YOUR_ACCT>/Lesson-04-Testing.git (fetch)
origin	https://github.com/<YOUR_ACCT>/Lesson-04-Testing.git (push)
```

### Fetch the changes

The most easy way is fetch all changes from all remote repo.

```bash
$ git fetch --all
```

### Merge to your branch

Checkout to the branch which you want to merged, then merge the code from upstream's master branch.

```bash
$ git merge upstream master
```

You may have to fix the conflict after merge complete.
If there is no conflict at your local repo, you can push the code to your fork repo. (Using `master` branch as example here.)

```bash
$ git push origin master
```
