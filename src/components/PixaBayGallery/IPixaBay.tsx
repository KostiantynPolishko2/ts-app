interface Hit {
    id: number
    previewURL: string
    webformatWidth: number
    webformatHeight: number
    user: string
}

export interface IPixaBayProps {
    hits: Hit[]
}