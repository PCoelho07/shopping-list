
export type HttpResponse<T = []> = {
    code: number
    data: T
}

export type HttpRequest<T = []> = {
    data: T
}