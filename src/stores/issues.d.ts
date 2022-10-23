export type Issue = {
  state: 'todo' | 'inProgress' | 'done'
  title: string
}

declare module 'issues' {
  const issues: Issue
  export default issues
}
