/* @flow */

export type Post = {
  address?: string,
  created_at: string,
  desc: string,
  from_date: string,
  htmldesc: string,
  id: string,
  img: boolean | string,
  title: string,
  to_date?: string,
  type: string,
  url: string,
};
