import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/todo"!</div>
}
