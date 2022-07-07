export interface ISliderItem {
  id: string
  pic: string
  link: string
}

export interface IAlbumItem {
  id: number
  title: string
  pic: string
  username: string
}

export type GetRecommendResponse = {
  albums: Array<IAlbumItem>
  sliders: Array<ISliderItem>
}
