export interface Iquestion {
  _id: string,
  title: string,
  user: string,
  answerCount: number,
  views: number,
  date: Date,
  result: {
    username: string,
    profile_pic: string
  }
  tags: []
}

export interface IResponse {
  status: string
}