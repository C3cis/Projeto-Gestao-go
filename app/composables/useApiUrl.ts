export function useApiUrl(): string {
  const { siteUrl } = useRuntimeConfig().public

  if (import.meta.server) return 'http://127.0.0.1:8080'

  return `${siteUrl.replace(/\/$/u, '')}/go`
}
