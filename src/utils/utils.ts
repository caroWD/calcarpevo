export const createBreadcrums = (pathname: string) => {
  const breadcrums = pathname.split('/')

  breadcrums[0] = 'inicio'

  return breadcrums.map((crum) => crum.split('-').join(' '))
}
