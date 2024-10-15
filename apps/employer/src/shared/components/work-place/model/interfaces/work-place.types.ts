interface IWorkPost {
  position: string
  dateFrom: string
  dateTo: string
  description?: string
}

export interface WorkPlaceProps {
  title: string
  verified?: boolean
  posts?: IWorkPost[]
}
