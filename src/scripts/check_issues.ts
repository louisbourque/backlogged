#!/usr/bin/env -S deno run
/* eslint-disable no-console */

import issues from '../stores/issues.json' assert { type: 'json' }

const checkDuplicates = () => {
  const duplicates = new Set()
  issues.forEach((issue) => {
    if (
      issues.some(
        (otherIssue) =>
          issue.progress_label === otherIssue.progress_label &&
          issue.id !== otherIssue.id
      )
    ) {
      duplicates.add(issue.progress_label)
    }
  })
  if (duplicates.size > 0) {
    console.log('WARN: Found duplicates:', duplicates)
  } else {
    console.log('No duplicates found')
  }
}

console.log('Checking for duplicate progress labels')
checkDuplicates()
