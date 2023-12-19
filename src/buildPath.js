export function buildPath(path = '')
{
    return import.meta.env.VITE_BASE_ROUTE + path
}