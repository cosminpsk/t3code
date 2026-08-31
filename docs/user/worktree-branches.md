# Name worktree branches

When a thread starts in a new worktree, T3 Code creates a branch for it and puts the worktree in a
folder named after that branch. By default those branches are named `t3code/…`, so the folder shows
up as `t3code-a68ab51e`.

You can change the `t3code` part to whatever fits your workflow, such as `feature` or your initials.

## Set it for every project

1. Open **Settings** and select **General**.
2. Under **New threads**, set **New thread workspace** to **New worktree**.
3. Enter your prefix in **Worktree branch prefix**.

## Set it for one project

A project can use a different prefix from the rest:

1. Open **Settings** and select **Projects**.
2. Select the project.
3. Enter your prefix in **Worktree branch prefix**.

The project value wins wherever it is set, and applies to every checkout in the project group. Clear
the field to go back to the global prefix.

## What the branch ends up as

A new worktree starts on a placeholder branch such as `feature/a68ab51e`. Once you send your first
message, T3 Code renames the branch to describe the work, keeping your prefix:
`feature/retry-dropped-uploads`.

The folder name is fixed when the worktree is created, so it keeps the placeholder form. Renaming
the branch later does not move the folder, since the agent may be working in it.

Prefixes are lowercased, and spaces and other characters Git does not allow in a branch name become
dashes. A prefix can contain slashes, so `team/feature` gives you branches like
`team/feature/retry-dropped-uploads`.

Threads created before you changed the prefix keep their existing branches.
